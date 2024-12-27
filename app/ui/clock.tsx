'use client'

import { useState } from 'react';

export default function Clock() {
  const time = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [sc, setSc] = useState(0);
  const [mi, setMi] = useState(0);
  const [ho, setHo] = useState(0);
  const [day, setDay] = useState('');
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  function getTime() {
    setSc(time.getSeconds());
    setMi(time.getMinutes());
    setHo(time.getHours());
    setDay(days[time.getDay()]);
    setDate(time.getDate());
    setMonth(months[time.getMonth()]);
    setYear(time.getFullYear());
  }

  setTimeout(getTime, 1000);

  return (
    <>

      <div className="text-white hidden sm:contents">
        {ho} : {mi} : {sc} - {day}, {date} {month}, {year}
      </div>

    </>
  );
}
