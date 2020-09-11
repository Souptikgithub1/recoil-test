import React from 'react';
import { useRecoilState } from 'recoil';
import { postStore } from '../store/Store';

const Home = () => {
    const [posts, setPosts] = useRecoilState(postStore);
    

    return (
        <div>
        <h2>Home</h2>
        {posts.map((p, i) => <li key={i}>{p}</li>)}
        </div>
    )
}

export default Home
