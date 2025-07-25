import {
  IAcademicSemesterCode,
  IAcademicSemesterName,
  IAcademicSEmesterNameCodeMapper,
  IMonths,
} from "./academicSemester.interface";

export const months: IMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const AcademicSemesterName: IAcademicSemesterName[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const AcademicSemesterCode: IAcademicSemesterCode[] = ["01", "02", "03"];

export const academicSEmesterNameCodeMapper: IAcademicSEmesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};
