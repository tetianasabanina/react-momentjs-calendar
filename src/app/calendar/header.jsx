import React from "react";

export default function CalendarHeader({ value, onChange }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  function prevYear() {
    return value.clone().subtract(1, "y");
  }

  function nextYear() {
    return value.clone().add(1, "y");
  }

  function thisYear() {
    return value.isSame(new Date(), "year");
  }
  return (
    <div className="header">
      <div className="year">
        <div
          className="previous"
          onClick={() => !thisYear() && onChange(prevYear())}
        >
          {!thisYear() ? String.fromCharCode(171) : null}
        </div>
        <div className="current">
          {currYear()}
        </div>
        <div className="next" onClick={() => onChange(nextYear())}>
          {String.fromCharCode(187)}
        </div>
      </div>
      <div className="month">
        <div
          className="previous"
          onClick={() => !thisMonth() && onChange(prevMonth())}
        >
          {!thisMonth() ? String.fromCharCode(171) : null}
        </div>
        <div className="current">
          {currMonthName()} {currYear()}
        </div>
        <div className="next" onClick={() => onChange(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
    </div>
  );
}