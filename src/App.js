import './App.css';
import {Routes,Link, Route} from "react-router-dom";
import ToDosPage from "./pages/ToDosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="wrap">
      <div className="menu">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'todos'}>ToDos</Link></li>
          <li><Link to={'albums'}>Albums</Link></li>
          <li><Link to={'comments'}>Comments</Link></li>
        </ul>
      </div>

      <div className="content">
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={'todos'} element={<ToDosPage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
