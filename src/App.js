import './App.css';
import Users from "./components/users/Users";
import AllLaunches from "./components/rocketLaunches/AllLaunches";

function App() {
  return (
    <div className="wrap">
      <Users/>
        <AllLaunches/>
    </div>
  );
}

export default App;
