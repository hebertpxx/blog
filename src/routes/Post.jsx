import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import blogFetch from '../axios/config'

import './Post.css'

const Post = () => {

    const {id} = useParams()
    const [post, setPost] = useState([])


    const getPost = async() => {
        
        try {

            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data
            setPost(data)

        } catch(error) {
            console.log(error)
        }
        
    }

    useEffect(() => {

        getPost()

    }, [])

    return (
        <div className='post'>
            <h1>Post</h1>
            {post === 0 ? (<p>Carregando...</p>) : (
                <div key={post.id} className='individual-post'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/`} className='btn'>Voltar</Link>
                </div>
            )}
        </div>
    )
}

export default Post