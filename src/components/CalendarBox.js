import React from "react";
import Calendar from "react-calendar";
import "../Calendar.css";
import moment from "moment";
import { classState, dateState } from "../atoms/date";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { doneMark, undoneMark } from "../atoms/mark";
import { AiOutlineCheck } from "react-icons/ai";

export default function CalendarBox() {
  const [className, setClassName] = useRecoilState(classState);
  const [selectDate, setSelectDate] = useRecoilState(dateState);
  const doneMarkList = useRecoilValue(doneMark);
  const undoneMarkList = useRecoilValue(undoneMark);
  const formatDate = (a, b) => moment(a).format(b);
  const onChange = (date) => {
    setSelectDate(formatDate(date, "Y년 M월 D일"));
  };
  useEffect(() => {
    if (className.indexOf(selectDate) !== -1) return;
    setClassName([...className, selectDate]);
  }, [selectDate]);
  return (
    <div>
      <Calendar
        locale={"ko-KR"}
        onChange={(date) => onChange(date)}
        formatDay={(locale, date) => formatDate(date, "D")}
        minDate={new Date(2019, 12, 1)}
        maxDate={new Date(2070, 1, 1)}
        tileContent={({ date, view }) => {
          if (
            undoneMarkList.find(
              (mark) => mark === moment(date).format("Y년 M월 D일")
            )
          ) {
            return (
              <div className="position">
                <AiOutlineCheck className="noneCheck" />
              </div>
            );
          }
          if (
            doneMarkList.find(
              (mark) => mark === moment(date).format("Y년 M월 D일")
            )
          ) {
            return (
              <div className="position">
                <AiOutlineCheck className="check" />
              </div>
            );
          }
        }}
      />
    </div>
  );
}
