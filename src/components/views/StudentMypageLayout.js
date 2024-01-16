import * as React from "react";
import MypageResultTable from "./MypageResultTable";
import StudentMypageTimetable from "./StudentMypageTimetable";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { selectedSubjectsState } from "../../atoms";

export default function StuEnrolmentpageBox() {
  const selectedSubjects = useRecoilValue(selectedSubjectsState);
  const [major, setMajor] = React.useState(0);
  const [culture, setCulture] = React.useState(0);
  const [experiment, setExperiment] = React.useState(0);

  // 전공, 교양, 실험 학점 계산기
  const settingSummary = () => {
    var ma = 0;
    var cu = 0;
    var ex = 0;
    for (var i = 0; i < selectedSubjects.length; i++) {
      if (selectedSubjects[i]["category"] === "전공필수") {
        console.log("1");
        ma = ma + selectedSubjects[i]["score"];
      } else if (selectedSubjects[i]["category"] === "교양") {
        console.log("2");
        cu = cu + selectedSubjects[i]["score"];
      } else if (selectedSubjects[i]["category"] === "실험") {
        console.log("");
        ex = ex + selectedSubjects[i]["score"];
      }
    }
    setMajor(ma);
    setCulture(cu);
    setExperiment(ex);
  };

  // 서버에 api 요청 (POST)
  const [resData, setResData] = React.useState([]);
  const InitPostMethod = async () => {
    await axios({
      url: "api/student/Mypage",
      method: "POST",
      baseURL:
        "http://k8s-stage-game2049-bb9247bafa-590478206.ap-northeast-2.elb.amazonaws.com:8080",
      withCredentials: true.valueOf,
      data: {
        univ: sessionStorage.getItem("univ"),
        id: sessionStorage.getItem("id"),
      },
    })
      .then(function callback(response) {
        // Table data -> 서버에서 받은 데이터
        setResData(response.data);
      })
      .catch(function CallbackERROR(response) {
        console.log("fail");
        alert("ERROR");
        window.location.href = "/student";
      });
  };

  // Define Column
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
  // 한번만 실행
  React.useEffect(() => {
    const univName = sessionStorage.getItem("univ");
    const ids = sessionStorage.getItem("id");
    if (univName !== "" && ids !== "") {
      InitPostMethod();
    }
  }, []);
  // 값이 바뀔때마다 반복 실행
  React.useEffect(() => {
    settingSummary();
  });

  return (
    <>
      <MypageResultTable
        columns={columns}
        data={selectedSubjects}
      ></MypageResultTable>
      <table border="1" bordercolor="gray" width="40%" height="75" align="left">
        <th bgcolor="gray">전공 학점</th>
        <th bgcolor="gray">교양 학점</th>
        <th bgcolor="gray">실험 학점</th>
        <tr>
          <td>{major}</td>
          <td>{culture}</td>
          <td>{experiment}</td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
