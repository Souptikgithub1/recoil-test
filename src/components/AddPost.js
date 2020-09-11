import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { postStore } from '../store/Store';
import {useHistory} from 'react-router-dom';

const AddPost = () => {

    const history = useHistory();

    const [posts, setPosts] = useRecoilState(postStore);

    const [post, setPost] = useState('');
  
  
    const handleAddPost = (e) => {
      e.preventDefault();
      setPosts([...posts, post]);
      setPost('');
      history.push('/');
    }


    return (
        <div>
        <h2>Add Post</h2>
        <form >
          <input type="text" placeholder="write some post here" value={post} onChange={e => setPost(e.target.value)} />
          <button type="submit" onClick={handleAddPost}>Post</button>
        </form>
        </div>
    )
}

export default AddPost
