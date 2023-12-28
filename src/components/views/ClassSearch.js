import * as React from 'react';
import ClassTable from './ClassSearchTable'
import axios from 'axios';
import { Box, Select, MenuItem, Input } from '@mui/material';

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {  
    return (
        <Box>
            <Input
                sx={{minWidth:70}}
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`Search`}
            />
        </Box>
    )
  }
function NullColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {  
    return (
        <Box sx={{minWidth: 70 }}/>
    )
  }
  
  // Selection Filter
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
        <Box sx={{minWidth: 70 }}>
            <Select
                sx={{ minWidth: 70 }}
                value={filterValue}
                defaultValue=""
                onChange={e => {
                setFilter(e.target.value || undefined)
                }}
            >
                <MenuItem value="">All</MenuItem>
                {options.map((option, i) => (
                <MenuItem key={i} value={option}>
                    {option}
                </MenuItem>
                ))}
            </Select>
        </Box>
    )
  }

export default function Class() {

    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const InitGetMethod = async() => {
        await axios({
            url: 'api/student/class/'+sessionStorage.getItem('univ'),
            method: 'GET',
            baseURL: 'http://localhost:8080',
            withCredentials: true.valueOf,
        },
        )
        .then(function callback(response){
            // console.log(response.data)
            setResData(response.data);
        })
        .catch(function CallbackERROR(response){
            console.log('fail');
            alert("ERROR");
            window.location.href = '/student';
        });
    }

    // Define Column
    const columns = React.useMemo(
        () => [
            {
                accessor: 'lecture_id' ,
                Header: '과목코드',
                Filter: DefaultColumnFilter,
            },
            {
                accessor:  'lecture_name' ,
                Header:     '과목명',
                Filter: DefaultColumnFilter,
            },
            {
                accessor: 'lecture_major',
                Header: '학과',
                Filter: DefaultColumnFilter,
            },
            {
                accessor: 'lecture_professor',
                Header: '교수',
                Filter: DefaultColumnFilter,
            },
            {
                accessor: 'lecture_class',
                Header: '학년',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                accessor:  'lecture_classify' ,
                Header: '전공/교양',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                accessor:   'lecture_time',
                Header: '시간',
                Filter: DefaultColumnFilter,
            },
            {
                accessor:  'lecture_room' ,
                Header: '분반',
                Filter: NullColumnFilter,
            },
            {
                accessor:  'lecture_credit' ,
                Header: '학점',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                accessor:  'lecture_limit' ,
                Header: '잔여 인원',
                Filter: NullColumnFilter,
            },
        ],
        []
    );


    React.useEffect(() => {
        const univ = sessionStorage.getItem('univ');
        if(univ !== "" ){
            // console.log(univ);
            InitGetMethod();
        }      
    },[]);
      
    return (
        <>
        <ClassTable columns={columns} data={resData}></ClassTable>
        </>
    );
    
}
