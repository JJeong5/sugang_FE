import * as React from 'react';
import { Button } from '@mui/material';
import Timetable from './TimeTable2';
import ManagerBoxLayout from './ManagerBoxLayout';
import FileUploadButton from '../assets/FileUploadButton';
import { Grid } from '@mui/material';

// 데이터 객체 생성
function createData(student_num,name,birth,department,department_sub,grade,contact,grade_cum,average,info) {
    return { 
        student_num : student_num,
        name : name,
        birth: birth,
        department : department,
        department_sub : department_sub,
        grade : grade,
        contact : contact,
        grade_cum : grade_cum,
        average : average,
        info : info,
        btn: row =>(
            <div>
                <Button >신청</Button>
            </div>
        ),
    };
  }

export default function TimetableBox() {
    // Column 정보 입력
    const columns = React.useMemo(
        () => [
            {
                accessor: 'student_num' ,
                Header: '학번',
            },
            {
                accessor: 'name' ,
                Header:  '이름',
            },
            {
                accessor: 'birth' ,
                Header:  '생년월일',
            },
            {
                accessor: 'department',
                Header: '전공'
            },
            {
                accessor:  'department_sub' ,
                Header: '부/복수 전공'
            },
            {
                accessor:   'grade',
                Header: '학년'
            },
            {
                accessor:  'contact' ,
                Header: '연락처'
            },
            {
                accessor:  'grade_cum' ,
                Header: '취득학점'
            },
            {
                accessor:  'average' ,
                Header: '평점',
            },
            {
                accessor:  'info' ,
                Header: '입학 정보',
            },
        ],
        []
    );
    
    const data = React.useMemo(
        () => [
            createData('20181234', '홍길돌','1998-05-21', '컴퓨터공학과', '', 4, '010-1234-1112', 100, 3.71, '신입'),
            createData('20194567', '김짱구','1999-06-23', '정보통신공학과', '경영학과', 3, '010-4567-5464',87, 3.45, '편입'),
          ],
          []
    );
    
      
    return (
        <ManagerBoxLayout>
            <Timetable columns={columns} data={data}></Timetable>
            <Grid  container justifyContent='flex-end'>
                <FileUploadButton></FileUploadButton>
            </Grid>
        </ManagerBoxLayout>
    );
}
