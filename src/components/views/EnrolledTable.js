import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { selectedSubjectsState } from "../../atoms";

export default function EnrolledTable({ columns }) {
  const enrolledData = useRecoilValue(selectedSubjectsState);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: enrolledData }, useGlobalFilter, useSortBy);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{ mt: 8, display: "flex", flexwrap: "wrap" }}>
            <Typography variant="h7">[ 현재 신청 내역 ]</Typography>
          </Box>
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
                    console.log(row),
                    (
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
                    )
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
      <Grid container justifyContent="flex-end">
        <Link to="../student/mypage">
          <Button variant="contained" style={{ backgroundColor: "#24527a" }}>
            My page 이동
          </Button>
        </Link>
      </Grid>
    </>
  );
}
