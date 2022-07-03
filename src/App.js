import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import getPosts from "./services/users.api.fetch/PostsFetch";
import Posts from "./components/posts/Posts";

function App() {

    let [posts, setPost] = useState([])

    const elevate = (id) => {
      getPosts(id).then(value => {
          let data = value.data
          setPost(data)
      })
    }

  return (
    <div className="wrap">
        <div className={'left'}><Users elevate={elevate}/></div>
        <div className={'right'}>
            <Posts posts={posts}/>
        </div>
    </div>
  );
}

export default App;
