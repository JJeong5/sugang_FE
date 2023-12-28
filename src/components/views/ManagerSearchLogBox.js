import * as React from 'react';
import { Button } from '@mui/material';
import ManagerBoxLayout from './ManagerBoxLayout';
import SearchLogTable from './SearchLogTable';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Box } from '@mui/material';
import axios from 'axios';

export default function ManagerSearchLogBox() {
    // Column 정보 입력
    const columns = React.useMemo(
        () => [
            {
                accessor:  'univ' ,
                Header: '학교'
            },
            {
                accessor: 'id',
                Header: '학번'
            },
            {
                accessor: 'lecture' ,
                Header: '과목코드',
            },
            {
                accessor: 'semester',
                Header: '학기'
            },
            {
                accessor:   'retake',
                Header: '재수강 여부'
            },
            {
                accessor:   'register',
                Header: '신청 날짜'
            },
            {
                accessor:  'modify' ,
                Header: '정정 날짜'
            },
            {
                accessor:   'cancel',
                Header: '취소 날짜'
            },
        ],
        []
    );

    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const handleGetMethod = async(id) => {
        await axios({
            url: 'api/manage/search',
            method: 'POST',
            baseURL: 'http://localhost:8080',
            withCredentials: true.valueOf,
            data: {
                univ: univName,
                studentId: id,
            }
        })
        .then(function callback(response){
            // console.log(typeof(response.data[0]['cancel']));
            setResData(response.data);
        })
        .catch(function CallbackERROR(response){

        });
    }

    // 학번 검색 event handling
    const [studentId, setId] = React.useState("");
    const handleSearchStudentId = (e) => {
        e.preventDefault();
        console.log(univName);

        handleGetMethod(studentId);
    }

    const [univName, setUniv] = React.useState("");
    React.useEffect(() => {
        const univ = sessionStorage.getItem('univ');
        if(univ){
            setUniv(univ);
        }
    },[]);
      
    return (
        <>
            {/* 학번 검색 */}
            <Box sx={{m: 4, display: 'flex', flexwrap: 'wrap'}}>
                <form onSubmit={handleSearchStudentId}>
                    <TextField name="filter" type="search" variant="standard" placeholder="학번" onChange={(e) => {setId(e.target.value)}}/>
                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                </IconButton>
                </form>
            </Box>
            <ManagerBoxLayout>
                <SearchLogTable columns={columns} data={resData}></SearchLogTable>
            </ManagerBoxLayout>
        </>
    );
}
