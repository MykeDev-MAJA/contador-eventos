import './App.css'
import CountdownBanner from './components/CountdownBanner'

function App() {
  // Set target date to May 26th of current year
  const targetDate = new Date(new Date().getFullYear(), 4, 26); 

  return (
    <div className=" flex items-center">
      <CountdownBanner targetDate={targetDate} />
    </div>
  )
}

export default App
