import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectPostsById } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { secondsToMinutes } from 'date-fns'

import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
    //retrieve postId

    const {postId} = useParams()

    const post = useSelector((state) => selectPostsById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>                
            </p>
            <ReactionButtons post={post}/>
        </article>
    )

}



export default SinglePostPage