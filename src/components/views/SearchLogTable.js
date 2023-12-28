import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import { Box } from '@mui/material';
import Search from '../assets/Search'


export default function EnrolledTable({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);
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
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {/* It should be implemented using calculation algorithm */}
        {/* <TableContainer>
            <Table sx={{ minWidth: 500 }}>
                <TableHead>
                <TableRow>
                    <TableCell>학번</TableCell>
                    <TableCell>전공</TableCell>
                    <TableCell>실험</TableCell>
                    <TableCell>교양</TableCell>
                    <TableCell>취득 학점</TableCell>
                    <TableCell>평점 평균</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>20200202</TableCell>
                        <TableCell>22</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>22</TableCell>
                        <TableCell>46</TableCell>
                        <TableCell>2.2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer> */}
        {/* --------------------------------------------------------- */}

        <TableContainer sx={{ maxHeight: 440 }}>
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
        <Box sx={{m: 1, display: 'flex', flexwrap: 'wrap'}} justifyContent="flex-end">
            {/* 검색 */}
            <Search onSubmit={setGlobalFilter} /> 
        </Box>
      </Paper>     
    </>

  );
}
