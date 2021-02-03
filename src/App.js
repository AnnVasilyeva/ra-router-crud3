import 'mini.css';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getAllPosts} from "./getAllPosts";
import Post from "./components/Post";
import FormAddPost from "./components/FormAddPost";
import PostInfo from "./components/PostInfo";
import PostEdit from "./components/PostEdit";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts)
  }, []);

  const addPost = async (content) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: content,
        userId: 1,
      })
    })
        .then(res => res.json())
        .then(myJson => console.log('Add new Post: ', myJson));

    getAllPosts(setPosts);
  }

  return (
    <div className="App">
      <Router>
        <button className='btn-add-post'>
          <Link to="/posts/new">Создать пост</Link>
        </button>
        <Route path='/posts/new' render={props => <FormAddPost {...props} addPost={addPost}/>}/>
        <Route exact path="/" render={() => posts.map(e =>
            <Post key={e.id} id={e.id} body={e.body}/>)}/>
        <Route exact path='/post/:id' component={PostInfo}/>
        <Route exact path='/post/:id/edit' component={PostEdit}/>

      </Router>
    </div>
  );
}

export default App;
