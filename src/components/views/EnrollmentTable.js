import * as React from "react";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, Modal, Switch, Typography } from "@mui/material";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
} from "react-table";
import Search from "../assets/Search";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import { useRecoilState } from "recoil";
import { selectedSubjectsState, enrollmentDataState } from "../../atoms";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasketTable({ columns, data }) {
  const [enrollmentData, setEnrollmentData] =
    useRecoilState(enrollmentDataState);

  const [open, setOpen] = React.useState(false);

  const [selectedSubjects, setSelectedSubjects] = useRecoilState(
    selectedSubjectsState
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  // 수강신청 버튼
  const tableEvent = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "enrollment",
        Header: "신청/취소",
        Cell: ({ row }) => (
          <Button onClick={() => handleEnrollment(row)}>신청</Button>
        ),
      },
    ]);
  };

  const handleEnrollment = (row) => {
    const selectedSubject = { ...row.original };

    if (selectedSubject.to < selectedSubject.totalSeats) {
      selectedSubject.to += 1;

      setSelectedSubjects((prevSelected) => [...prevSelected, selectedSubject]);

      handleOpen();
    } else {
      // Display Snackbar for reaching enrollment limit
      setSnackbarOpen(true);
      setSnackbarMessage("신청이 불가능합니다. 정원이 초과되었습니다.");
    }
  };

  // 수강신청 성공 시 Snackbar가 열리도록 함
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    // useEffect를 이용하여 상태가 변경된 후에 모달을 열도록 함
    if (open) {
      handleOpen();
    }
  }, [open]);

  const handleYes = () => {
    console.log("Selected Subjects:", selectedSubjects);
    const selectedID = selectedSubjects[selectedSubjects.length - 1];

    if (selectedID.to >= selectedID.totalSeats) {
      setSnackbarOpen(true);
      setSnackbarMessage("신청 불가 또는 잔여 여석이 없습니다.");
    } else {
      if (selectedSubjects && selectedSubjects.length > 0) {
        const selectedSubject = selectedSubjects[selectedSubjects.length - 1]; // Assuming you want the first selected subject
        console.log("Selected Subject Code:", selectedSubject.code);

        // AAA-0001 ~ EEE-0005까지의 경우
        const subjectCodeToIndex = {
          "AAA-0001": 0,
          "AAA-0002": 1,
          "BBB-0003": 2,
          "DDD-0004": 3,
          "EEE-0005": 4,
          // 추가적으로 다른 과목 코드에 대한 매핑을 필요에 따라 추가할 수 있습니다.
        };

        const subjectIndex = subjectCodeToIndex[selectedSubject.code];

        if (subjectIndex !== undefined) {
          const updatedEnrollmentData = enrollmentData[subjectIndex].to + 1;

          setEnrollmentData((prevEnrollmentData) => [
            ...prevEnrollmentData.slice(0, subjectIndex),
            { ...prevEnrollmentData[subjectIndex], to: updatedEnrollmentData },
            ...prevEnrollmentData.slice(subjectIndex + 1),
          ]);

          console.log(updatedEnrollmentData);

          // 신청 성공 시 Snackbar를 열도록 함
          setSnackbarOpen(true);
          setSnackbarMessage("신청에 성공했습니다.");
        }
      }

      handleClose();
    }
  };

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="button" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { selectedRowIds },
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    tableEvent,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <>
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            </>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [major, setMajor] = React.useState(""); // 전공/교양 선택
  const [grade, setGrade] = React.useState(""); // 학년 선택
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // 3초 동안 보여진 후 자동으로 닫힘
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      {/* 팝업 창 UI Rendering */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            신청하시겠습니까?
          </Typography>
          <div>
            <Button onClick={handleYes}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>

      {/* 상단 바 UI Rendering */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{ mt: 8, display: "flex", flexwrap: "wrap" }}>
            <Typography variant="h7">[ 신청 교과목 조회 ]</Typography>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">
                전공/교양 선택
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-major"
                value={major}
                label="Major"
                onChange={handleChangeMajor}
              >
                <MenuItem value={10}>전공</MenuItem>
                <MenuItem value={20}>교양</MenuItem>
                <MenuItem value={30}>실험실습</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">학년</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-grade"
                value={grade}
                label="Grade"
                onChange={handleChangeGrade}
              >
                <MenuItem value={10}>1학년</MenuItem>
                <MenuItem value={20}>2학년</MenuItem>
                <MenuItem value={30}>3학년</MenuItem>
                <MenuItem value={40}>4학년</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="subtitle1">
              &nbsp; 과목명으로 검색 &nbsp;
            </Typography>
            <Search onSubmit={setGlobalFilter} />
          </Box>

          {/* Table */}
          <Table {...getTableProps()} stickyHeader aria-label="sticky table">
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      {...row.getRowProps()}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {row.cells.map((cell) => (
                        <TableCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
