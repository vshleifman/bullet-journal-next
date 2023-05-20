'use client'

import { ChangeEvent } from "react"
import { IMonthlyLog } from "../api/log/route"

const debounce = (func: any, timeout = 300) => {
  let timer: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

const handleInput = (e: ChangeEvent<HTMLInputElement>) => fetch('http://localhost:3000/api/log', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(e.target.value)})

const LogItem = ({monthlyLog, item}: {monthlyLog: IMonthlyLog, item: string}) => {
    return (
        <div className="grid grid-cols-[1fr_15fr] my-[0.1em] mx-12" key={item}>
        <div className="grid place-items-center border-b-2 border-black py-[0.1em] px-2">{item}</div>
        <span className="grid border-b-2 border-l-2 border-black py-[0.1em] px-2">
          <input style={{all: "unset"}}
            defaultValue={monthlyLog.January[Number(item)]}
            id={item.toString()}
            onChange={debounce(handleInput)}
          ></input>
        </span>
      </div>
    )
}

export default LogItem