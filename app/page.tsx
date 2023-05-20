import MonthlyLog from './monthlyLog/page';

const Home = async () => {
  return (
    <>
    home
    {/* @ts-expect-error Server Component
  <MonthlyLog month='January'/> */}
    </>
  )
}

export default Home