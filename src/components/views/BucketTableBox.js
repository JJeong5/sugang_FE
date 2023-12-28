import * as React from 'react';
import { Button } from '@mui/material';
import BucketTable from './BucketTable'

// 데이터 객체 생성
function createData(code, lecture, department, category, time, classroom, score, to) {
    return { 
        code: code,
        lecture: lecture,
        department: department,
        category: category,
        time: time,
        classroom: classroom,
        score: score,
        to: to,
        btn: row =>(
            <div>
                <Button >신청</Button>
            </div>
        ),
    };
  }

export default function StuEnrolmentpageBox() {
    // Column 정보 입력
    const columns = React.useMemo(
        () => [
            {
                accessor: 'code' ,
                Header: '과목코드',
            },
            {
                accessor:  'lecture' ,
                Header:     '과목명',
            },
            {
                accessor: 'department',
                Header: '학과'
            },
            {
                accessor:  'category' ,
                Header: '전공/교양'
            },
            {
                accessor:   'time',
                Header: '시간'
            },
            {
                accessor:  'classroom' ,
                Header: '분반'
            },
            {
                accessor:  'score' ,
                Header: '학점'
            },
            {
                accessor:  'to' ,
                Header: '잔여 인원',
            },
        ],
        []
    );
    
    const data = React.useMemo(
        () => [
            createData('AAA-0001', '알고리즘개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3, '10/60'),
            createData('AAA-0002', '자료구조개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3, '10/60'),
            createData('BBB-0003', '해석학1', '수학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3, '10/60'),
            createData('DDD-0004', '논어', '공통', '교양', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3, '10/60'),
            createData('EEE-0005', '전자기학', '전기전자공학부', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3, '10/60'),
          ],
          []
    );
    
      
    return (
        <>
        <BucketTable columns={columns} data={data}></BucketTable>
        </>
    );
}
