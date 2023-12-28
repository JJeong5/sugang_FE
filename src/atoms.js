import { atom } from "recoil";

export const selectedSubjectsState = atom({
  key: "selectedSubjects",
  default: [],
});

export const enrollmentDataState = atom({
  key: "enrollmentDataState",
  default: [
    {
      code: "AAA-0001",
      lecture: "알고리즘개론",
      department: "컴퓨터공학과",
      category: "전공필수",
      time: "[월]10:30~12:00 [수]9:00~10:30",
      professor: "송원준",
      classroom: 1,
      score: 3,
      to: 10,
      totalSeats: 60,
    },
    {
      code: "AAA-0002",
      lecture: "자료구조개론",
      department: "컴퓨터공학과",
      category: "전공필수",
      time: "[화]10:30~12:00 [목]9:00~10:30",
      professor: "김도형",
      classroom: 1,
      score: 3,
      to: 9,
      totalSeats: 20,
    },
    {
      code: "BBB-0003",
      lecture: "해석학1",
      department: "수학과",
      category: "전공필수",
      time: "[화]13:00~15:00 [수]16:00~18:00",
      professor: "김만배",
      classroom: 1,
      score: 3,
      to: 32,
      totalSeats: 50,
    },
    {
      code: "DDD-0004",
      lecture: "논어",
      department: "공통",
      category: "교양",
      time: "[수]13:30~16:00",
      professor: "김아욱",
      classroom: 1,
      score: 3,
      to: 19,
      totalSeats: 25,
    },
    {
      code: "EEE-0005",
      lecture: "전자기학",
      department: "전기전자공학부",
      category: "전공필수",
      time: "[월]09:00~10:30 [목]09:00~10:30",
      professor: "정충교",
      classroom: 1,
      score: 3,
      to: 30,
      totalSeats: 30,
    },
  ],
});
