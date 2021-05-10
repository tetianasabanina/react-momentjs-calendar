import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import buildCalendar from './build';
import dayStyles from "./styles";
import "./styles.css";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div>
      <div className="calendar">
        <Header value={value} onChange={onChange} />

        <div className="body">
          <div className="day-names">
            {["m", "t", "w", "t", "f", "sa", "su"].map((d, di) => (
              <div className="week" key={di}>{d}</div>
            ))}
          </div>
          {calendar.map((week, wi) => (
            <div key={wi}>
              {week.map((day, di) => (
                <div
                  key={di}
                  className="day"
                  onClick={() => {
                    if (day < moment(new Date()).startOf("day")) return;
                    onChange(day);
                  }}
                >
                  <div className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>Selected day: {value.format("DD-MM-YYYY")}</div>
    </div>
  );
}