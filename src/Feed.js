import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import { db } from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import Storyreel from './Storyreel'
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
       
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })))
        })
    },[]);

   
    return (
        <div className="feed">
            <Storyreel/>
            <MessageSender/>

            
            {
                posts.map(post=>{
                   return <Post photoURL={post.data.photoURL} image={post.data.image} username={post.data.username} timestamp="01:40 PM" message={post.data.message}/>
                })
            }
            

        </div>
    )
}

export default Feed
