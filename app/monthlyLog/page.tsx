import LogItem from './LogItem';

const MonthlyLog = async ({month = 1, year = 2020}: {month: number, year: number}) => {
  const monthlyLog = await (await fetch('http://localhost:3000/api/log', {cache: 'no-cache'})).json();

  const h = 36;
  const w = Math.ceil(h / Math.SQRT2);
  

  return (
    <>
      <div style={{height: `${h * 2}em`, width: `${w * 2}em`}} className='border-black border-[1px] bg-[#ccd6ab] grid grid-rows-[1fr_20fr]'>
        <div className='grid place-items-center'> Monthly Log: {month}</div>
        <div className='grid grid-rows-[repeat(32,_1fr)]'>
          {Object.keys(monthlyLog[month]).map(item => (
            <LogItem key={item} task={monthlyLog[month][item]} month={month} year={year} day={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default MonthlyLog