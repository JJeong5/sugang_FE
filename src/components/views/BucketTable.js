import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Modal, Typography } from '@mui/material';
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import { Box } from '@mui/material';



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

export default function BucketTable({columns, data}) {
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


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data }, 
    useGlobalFilter, 
    useSortBy, 
    tableEvent, 
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
          <Box sx={{mt: 2, display: 'flex', flexwrap: 'wrap', justifyContent: 'space-between'}}>
            <Typography variant="h7">
              [ 교과목 조회 ]
            </Typography>
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