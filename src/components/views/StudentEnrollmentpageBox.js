import * as React from "react";
import EnrollmentTable from "./EnrollmentTable";
import EnrolledTable from "./EnrolledTable";
import BasketTable from "./BasketTable";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { enrollmentDataState } from "../../atoms";

// 데이터 객체 생성
function createData(
  code,
  lecture,
  department,
  category,
  time,
  professor,
  classroom,
  score,
  to,
  totalSeats // 추가: 총 자리 수
) {
  return {
    code: code,
    lecture: lecture,
    department: department,
    category: category,
    time: time,
    professor: professor,
    classroom: classroom,
    score: score,
    to: to,
    totalSeats: totalSeats, // 추가: 총 자리 수
    btn: (row) => (
      <div>
        <Button>신청</Button>
      </div>
    ),
  };
}

export default function StuEnrolmentpageBox() {
  const enrollmentData = useRecoilValue(enrollmentDataState);

  // Column 정보 입력
  const columns = React.useMemo(
    () => [
      {
        accessor: "code",
        Header: "과목코드",
      },
      {
        accessor: "lecture",
        Header: "과목명",
      },
      {
        accessor: "department",
        Header: "학과",
      },
      {
        accessor: "category",
        Header: "전공/교양",
      },
      {
        accessor: "time",
        Header: "시간",
      },
      {
        accessor: "professor",
        Header: "교수명",
      },

      {
        accessor: "score",
        Header: "학점",
      },
      {
        accessor: "to",
        Header: "신청인원",
      },
      {
        accessor: "totalSeats",
        Header: "대상인원",
      },
    ],
    []
  );

  const columns_basket = React.useMemo(
    () => [
      {
        accessor: "code",
        Header: "과목코드",
      },
      {
        accessor: "lecture",
        Header: "과목명",
      },
      {
        accessor: "category",
        Header: "전공/교양",
      },
      {
        accessor: "time",
        Header: "시간",
      },
      {
        accessor: "professor",
        Header: "교수명",
      },
      {
        accessor: "classroom",
        Header: "분반",
      },
      {
        accessor: "score",
        Header: "학점",
      },
    ],
    []
  );

  function createData_basket(
    code,
    lecture,
    category,
    time,
    professor,
    classroom,
    score
  ) {
    return {
      code: code,
      lecture: lecture,
      category: category,
      time: time,
      professor: professor,
      classroom: classroom,
      score: score,
    };
  }

  const data_basket = React.useMemo(
    () => [
      createData_basket(
        "AAA-0001",
        "알고리즘개론",
        "전공필수",
        "[월]10:30~12:00 [수]9:00~10:30",
        "지준영",
        "A",
        3
      ),
      createData_basket(
        "AAA-0002",
        "자료구조개론",
        "전공필수",
        "[월]10:30~12:00 [수]9:00~10:30",
        "지준영",
        "A",
        3
      ),
      createData_basket(
        "BBB-0003",
        "해석학1",
        "전공필수",
        "[월]10:30~12:00 [수]9:00~10:30",
        "지준영",
        "A",
        3
      ),
      createData_basket(
        "DDD-0004",
        "논어",
        "교양",
        "[월]10:30~12:00 [수]9:00~10:30",
        "지준영",
        "B",
        3
      ),
      createData_basket(
        "EEE-0005",
        "전자기학",
        "전공필수",
        "[월]10:30~12:00 [수]9:00~10:30",
        "지준영",
        "B",
        3
      ),
    ],
    []
  );

  return (
    <>
      <EnrollmentTable
        columns={columns}
        data={enrollmentData}
      ></EnrollmentTable>
      <BasketTable columns={columns_basket} data={data_basket}></BasketTable>
      <EnrolledTable columns={columns} data={enrollmentData}></EnrolledTable>
    </>
  );
}
