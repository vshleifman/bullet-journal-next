"use client";

import { ChangeEvent } from "react";

const debounce = (func: any, timeout = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};

const LogItem = ({
  day,
  month,
  year,
  task,
}: {
  day: string;
  month: number;
  year: number;
  task: string;
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    return fetch("http://localhost:3000/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: e.target.value,
        targetDate: new Date(`${year}-${month}-${day}`),
      }),
    });
  };

  return (
    <div className="grid grid-cols-[1fr_15fr] my-[0.1em] mx-12" key={day}>
      <div className="grid place-items-center border-b-2 border-black py-[0.1em] px-2">
        {day}
      </div>
      <span className="grid border-b-2 border-l-2 border-black py-[0.1em] px-2">
        <input
          autoComplete="off"
          style={{ all: "unset" }}
          defaultValue={task}
          id={day.toString()}
          onChange={debounce(handleInput)}
        ></input>
      </span>
    </div>
  );
};

export default LogItem;
