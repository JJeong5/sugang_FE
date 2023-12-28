import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Modal, Switch, Typography } from '@mui/material';
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table'
import Search from '../assets/Search'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BucketEnrollmentTable({columns, data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 수강신청 버튼
  const tableEvent = (hooks) => {
    hooks.visibleColumns.push((columns) => [
        ...columns,
        {
        id: "enrollment",
        Header: "신청/취소",
        Cell: ({row}) => (
              <Button onClick={handleOpen}>신청</Button>
          ),
        },
    ]);
  };

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: {selectedRowIds},
  } = useTable(
    { columns, data }, 
    useGlobalFilter, 
    useSortBy, 
    tableEvent, 
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
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
      ])
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

  const [category, setcategory] = React.useState('');
  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
  };

  return (
    <>
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
            <Button onClick={handleClose}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>

      {/* 상단 바 UI Rendering */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{mt: 8, display: 'flex', flexwrap: 'wrap', justifyContent:'space-around'}}>
            <Typography variant="h7">
              [ 교과목 조회 ]
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="과목추천" />
            </FormGroup>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">전공/교양 선택</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
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
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
              >
                <MenuItem value={10}>1학년</MenuItem>
                <MenuItem value={20}>2학년</MenuItem>
                <MenuItem value={30}>3학년</MenuItem>
                <MenuItem value={30}>4학년</MenuItem>
              </Select>
            </FormControl>
            <Search onSubmit={setGlobalFilter} />
          </Box>

          {/* Table */}
          <Table {...getTableProps()} stickyHeader aria-label="sticky table"> 
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                    console.log(row),
                    <TableRow {...row.getRowProps()} hover role="checkbox" tabIndex={-1} key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
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
      
      {/* 증원신청 버튼 */}
      <Grid container justifyContent='flex-end'>
        <Button variant='contained' style={{backgroundColor: "#24527a"}} onClick={
          ()=>{
            console.log(selectedRowIds)
          }
        }>한꺼번에 담기</Button>
      </Grid>
    </>
  );
}

// 증원신청 값 조회
{/* <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code> */}