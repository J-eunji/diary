import React, { useState } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";
import moment from "moment";
import { classState, dateState } from "../atoms/date";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { markState } from "../atoms/mark";

export default function CalendarBox() {
  const [className, setClassName] = useRecoilState(classState);
  const [selectDate, setSelectDate] = useRecoilState(dateState);
  const markList = useRecoilValue(markState);
  const formatDate = (a, b) => moment(a).format(b);
  const onChange = (date) => {
    setSelectDate(formatDate(date, "Y년 M월 D일"));
  };
  useEffect(() => {
    if (className.indexOf(selectDate) !== -1) return;
    setClassName([...className, selectDate]);
  }, [selectDate]);
  console.log(markList.find((mark) => mark === selectDate));
  console.log(selectDate);
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
            markList.find((mark) => mark === moment(date).format("Y년 M월 D일"))
          ) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="highlight"></div>
                </div>
              </>
            );
          }
        }}
      />
    </div>
  );
}
