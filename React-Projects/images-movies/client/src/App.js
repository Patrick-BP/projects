import {Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
     </ul>
    </div>
  );
}

export default App;
