import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import ToDosPage from "./pages/ToDosPage";
import CommentsPage from "./pages/CommentsPage";
import PostComponent from "./components/Post/PostComponent";

function App() {
    return (
        <div className="wrap">
            <div className="menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/todos'}>To Dos</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/todos'} element={<ToDosPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}>
                        <Route path={'post-:id'} element={<PostComponent/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
