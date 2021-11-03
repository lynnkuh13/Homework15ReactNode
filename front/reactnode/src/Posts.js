import React, {useState, useEffect} from 'react';
import axios from 'axios';



function Posts(props) {
    const [posts, setPosts] = useState('');
    useEffect(() => {
        let data = {
            username: "lynnk",
            password: 2121
        }
        axios.post('http://localhost:3402/posts', data)
        .then(res => {
            console.log("Req: ", res.data);
            setPosts(res.data.posts);
            
        })
    })
    return (
        <div>
            <h1> {posts} </h1>
        </div>
    );
}
export default Posts;