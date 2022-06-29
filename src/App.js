import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import getUsers from "./services/users.api.fetch/UsersFetch";

function App() {



  return (
    <div className="wrap">
        <h3>Chosen user's posts</h3>

        <Users/>
    </div>
  );
}

export default App;
