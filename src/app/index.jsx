import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";
import "./styles.css";

export default function App(){
  moment.updateLocale("en", { week: { dow: 1 } });
  const [selectedDate, setSelectedDate] = useState(moment());
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}