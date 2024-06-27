import { Avatar, Icon, IconButton, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import "./css/messagesender.css"
import { useStateValue } from './StateProvider';
import { db, storage } from './firebase';
import firebase from "firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);
    const [image, setImage]=useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress]= useState(0);

    const handleClose=()=>{
        setOpen(false)
    }

    const uploadFilewithClick=()=>{
            document.getElementById("imageFile").click();
    }

    const handleChange=(e)=>{
        if(e.target.files[0])
        {
            setImage(e.target.files[0]);
        }
       
    
    }

    const handleUpload=(e)=>{
        e.preventDefault();
        if(image==="") {
            db.collection("posts").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:message,
                username:user.displayName,
                photoURL:user.photoURL
            })
        }
        else
        {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                },
                (error)=>{
                    console.log(error);
                    alert(error.message);
                },
                ()=> {
                    storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                        db.collection("posts").add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            message:message,
                            username:user.displayName,
                            photoURL:user.photoURL,
                            image:url
                        });
                        handleClose();
                        setMessage("");
                        setImage("");
                        setProgress(0);
                    })
                }
            )

        }
       
    }

    const handleOpen = ()=>{
        setOpen(true)
    }
    return (
        <>
        <Modal open={open} onClose={handleClose}>
            <div className="modal_pop">
                <form>
                    <div className="modalHeading">
                        <h3>Create Post</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>

                    <div className="modalHeader__top">
                        <Avatar src={user.photoURL}/>
                        <h5>{user.displayName}</h5>
                    </div>

                    <div className="modalBody">
                        <textarea rows="5" placeholder="What's on your mind Mahabeer ?" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                    </div>

                    <div className="modalFooter">
                        <div className="modalFooterLeft">
                            <h4>Add to your post</h4>
                         </div>
                         <div className="modalFooterRight">
                            <IconButton onClick={uploadFilewithClick}>
                                <PhotoLibraryIcon fontSize="large" style={{color:'lightgreen'}}/>
                            </IconButton>

                            <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>

                            <IconButton>
                                <VideoCallIcon fontSize="large"  style={{color:'red'}}/>
                            </IconButton>

                            <IconButton>
                                <InsertEmoticonIcon fontSize="large"  style={{color:'#ffb100'}}/>
                            </IconButton>
                         </div>

                    </div>

                    {image!=="" && <h2 style={{"fontSize": "15px",
    "marginBottom": "20px",
    "color": "green"}}>Image in added and will be displayed after clicking on post button</h2>}
                    
                    {
    progress!="" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>
}
                    

                    <input type="submit" onClick={handleUpload} className="post__submit" value="Post"/>
                </form>
            </div>
        </Modal>

        <div className="messagesender">
                <div className="messagesender__top">
                    <Avatar src={user.photoURL}/>

                    <form>
                        <input type="text" placeholder="What's on you mind Prajwal?" onClick={handleOpen}/>
                    </form>
                </div>

                <div className="messagesender__bottom">
                    <div className="messangerOptions">
                        <VideoCallIcon style={{color:'red'}} fontSize="large"/>
                        <p>Live Video</p>
                    </div>

                    <div className="messangerOptions">
                        <PhotoLibraryIcon  style={{color:'lightgreen'}} fontSize="large"/>
                        <p>Photo/Video</p>
                    </div>

                    <div className="messangerOptions">
                        <InsertEmoticonIcon  style={{color:'#ffb100'}} fontSize="large"/>
                        <p>Feeling/Activity</p>
                    </div>
                   
                </div>
        </div>
        </>
    )
}

export default MessageSender
