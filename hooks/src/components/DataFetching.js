import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <h1>
            <ul>{posts && posts.length && posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </h1>
    )
}

export default DataFetching