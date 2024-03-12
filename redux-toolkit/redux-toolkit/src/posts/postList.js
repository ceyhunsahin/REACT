import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {

   const posts = useSelector(state => state.posts)
   console.log(posts)


  return (
    <>
    {posts.map(post => (
        <div key={post.id}>
            <p >{post.title}</p>
            <p>{post.content.substring(0, 100)}</p>
        </div>
        
    ))}
    </>
  )
}

export default PostList