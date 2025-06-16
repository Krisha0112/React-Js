import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import GET_POSTS from "../redux/action/postsAction"
function Posts() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( GET_POSTS )
  })

  return (
    <div align="center">
      <h1>Posts</h1>
    </div>
  )
}

export default Posts
