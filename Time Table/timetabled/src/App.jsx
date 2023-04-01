import './app.css';
import Calendar from './Components/Calendar'

const App = () => {
  return (
    <div className='App'>
      <h1>Glenn's Timetable</h1>
      <h2>Welcome to Glenn's weekly time schedule. These events contains fellowships, music gigs, church, and other school curricular activities.</h2>
      <Calendar/>
    </div>
  )
}

export default App;