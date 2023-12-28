import * as React from "react";
import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import Typography from "../assets/Typography";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const calendars = [
  {
    id: "0",
    name: "Private",
    bgColor: "#9e5fff",
    borderColor: "#9e5fff",
  },
];

// yyyy-MM-DD -> DATE()
function parseStrToDate(str) {
  var sYear = str.substring(0, 4);
  var sMonth = str.substring(5, 7);
  var sDate = str.substring(8, 10);
  return new Date(sYear, sMonth - 1, sDate);
}

export default function TimeTable({ data }) {
  const [startDay, setStartDay] = React.useState("");
  const WeekDay = { MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6, SU: 0 };

  const templates = {
    weekDayname: (schedule) => {
      // 시작 기준일 잡기 (해당 주 일요일)
      if (schedule.day === 0) {
        setStartDay(schedule.renderDate);
      }
      return "<Typography>" + schedule.dayName + "</Typography>";
    },
  };
  const pivotDay = parseStrToDate(startDay);
  const sch = [];
  for (var i = 0; i < Object.values(data).length; ++i) {
    // 시작일자 구하기: 기준일 + 일 + 시 + 분
    var lectureStart = new Date(pivotDay);
    lectureStart.setDate(
      lectureStart.getDate() +
        WeekDay[Object.values(data)[i]["lecture_first_sch"].substring(0, 2)]
    );
    // console.log(Number(Object.values(data)[i]["lecture_first_sch"].substring(2,4)))
    lectureStart.setHours(
      lectureStart.getHours() +
        Number(Object.values(data)[i]["lecture_first_sch"].substring(2, 4))
    );
    lectureStart.setMinutes(
      lectureStart.getMinutes() +
        Number(Object.values(data)[i]["lecture_first_sch"].substring(4, 6))
    );

    // 종료일자 구하기: 기준일 + 일 + 시 + 분
    var lectureEnd = new Date(pivotDay);
    lectureEnd.setDate(
      lectureEnd.getDate() +
        WeekDay[Object.values(data)[i]["lecture_first_sch"].substring(0, 2)]
    );
    // console.log(Number(Object.values(data)[i]["lecture_first_sch"].substring(2,4)))
    lectureEnd.setHours(
      lectureEnd.getHours() +
        Number(Object.values(data)[i]["lecture_first_sch"].substring(6, 8))
    );
    lectureEnd.setMinutes(
      lectureEnd.getMinutes() +
        Number(Object.values(data)[i]["lecture_first_sch"].substring(8, 10))
    );

    // 랜덤 색상 지정
    var colorStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    sch.push({
      id: Object.values(data)[i]["lecture_idx"],
      calendarId: Object.values(data)[i]["lecture_idx"],
      title:
        Object.values(data)[i]["lecture_name"] +
        "(" +
        Object.values(data)[i]["lecture_id"] +
        ")",
      category: "time",
      start: lectureStart,
      end: lectureEnd,
      bgColor: colorStyle,
    });

    // second sch이 있으면
    if (Object.values(data)[i]["lecture_second_sch"].length === 10) {
      lectureStart = new Date(pivotDay);
      lectureStart.setDate(
        lectureStart.getDate() +
          WeekDay[Object.values(data)[i]["lecture_second_sch"].substring(0, 2)]
      );
      // console.log(Number(Object.values(data)[i]["lecture_second_sch"].substring(2,4)))
      lectureStart.setHours(
        lectureStart.getHours() +
          Number(Object.values(data)[i]["lecture_second_sch"].substring(2, 4))
      );
      lectureStart.setMinutes(
        lectureStart.getMinutes() +
          Number(Object.values(data)[i]["lecture_second_sch"].substring(4, 6))
      );

      lectureEnd = new Date(pivotDay);
      lectureEnd.setDate(
        lectureEnd.getDate() +
          WeekDay[Object.values(data)[i]["lecture_second_sch"].substring(0, 2)]
      );
      // console.log(Number(Object.values(data)[i]["lecture_second_sch"].substring(2,4)))
      lectureEnd.setHours(
        lectureEnd.getHours() +
          Number(Object.values(data)[i]["lecture_second_sch"].substring(6, 8))
      );
      lectureEnd.setMinutes(
        lectureEnd.getMinutes() +
          Number(Object.values(data)[i]["lecture_second_sch"].substring(8, 10))
      );

      // Schedule 입력 양식 (Object List)
      /*
                [
                    {
                        id: id,
                        canlandarId: calandarId,
                        title: 시간표 블록에 나올 제목
                        category: "time" 고정
                        start: 시작시간 (Date변수)
                        end: 종료시간 (Date변수)
                        bgColor: 색상
                    },
                    ....
                ]
            */
      sch.push({
        id: Object.values(data)[i]["lecture_idx"],
        calendarId: Object.values(data)[i]["lecture_idx"],
        title:
          Object.values(data)[i]["lecture_name"] +
          "(" +
          Object.values(data)[i]["lecture_id"] +
          ")",
        category: "time",
        start: lectureStart,
        end: lectureEnd,
        bgColor: colorStyle,
      });
    }
  }

  return (
    <Calendar
      calendars={calendars}
      // 달력에서 가져온 양식이라 달력요소 제거 필요
      useDetailPopup={false}
      useCreationPopup={false}
      unselectable={true}
      isReadOnly={true}
      disableClick={true}
      disableDblClick={true}
      taskView={false}
      scheduleView={["time"]}
      template={templates}
      // -------------------------------------------
      schedules={sch}
    />
  );
}
