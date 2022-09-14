import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/CalendarCss.css";
import moment from "moment";
import { classState, dateState } from "../atoms/date";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function CalendarBox() {
  const [className, setClassName] = useRecoilState(classState);
  const [selectDate, setSelectDate] = useRecoilState(dateState);
  const [mark, setMark] = useState(["15-09-2022"]);
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
        onChange={(date) => onChange(date)}
        calendarType={"Hebrew"}
        formatDay={(locale, date) => formatDate(date, "D")}
        minDate={new Date(2019, 12, 1)}
        maxDate={new Date(2070, 1, 1)}
        tileClassName={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
    </div>
  );
}
