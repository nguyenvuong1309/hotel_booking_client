import React, { useEffect, useState, useRef } from 'react'
import socketIOClient from "socket.io-client";
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import UserLogin from './UserLogin';
// import {
//     doc,
//     setDoc,
//     collection,
//     serverTimestamp,
//     query,
//     onSnapshot,
//     orderBy,

// } from 'firebase/firestore';
// import db from "./firebaseConfig/firebaseConfig.js"


export default function ChatContainer() {

    let socketio = socketIOClient(
        import.meta.env.VITE_SOCKET_URL
        //"http://localhost:8080"
    )
    const [chats, setChats] = useState([])
    // console.log("🚀 ~ file: ChatContainer.jsx:23 ~ ChatContainer ~ chats:", chats)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user:detail")))
    // console.log("🚀 ~ file: ChatContainer.jsx:25 ~ ChatContainer ~ user:", JSON.parse(localStorage.getItem("user:detail")))
    const avatar = localStorage.getItem('avatar') || "https://th.bing.com/th?id=OIP.P35wn07b6ZQzfPv9RhYmRQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    // const chatsRef = collection(db, "Messages")
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // useEffect(() => {
    //     scrollToBottom()
    // }, [chats])

    useEffect(() => {
        socketio.on('chat', senderChats => {
            setChats(senderChats)
        })
    })


    // useEffect(() => {

    //     const q = query(chatsRef, orderBy('createdAt', 'asc'))

    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         const fireChats = []
    //         querySnapshot.forEach(doc => {
    //             fireChats.push(doc.data())
    //         });
    //         setChats([...fireChats])
    //     })
    //     return () => {
    //         unsub()
    //     }

    // }, [])

    // function addToFirrebase(chat) {
    //     const newChat = {
    //         avatar,
    //         createdAt: serverTimestamp(),
    //         user,
    //         message: chat.message
    //     }

    //     // const chatRef = doc(chatsRef)
    //     setDoc(chatRef, newChat)
    //         .then(() => console.log('Chat added succesfully'))
    //         .catch(console.log)
    // }


    function sendChatToSocket(chat) {
        socketio.emit("chat", chat)
    }

    function addMessage(chat) {
        const newChat = {
            message: chat,
            user: user?.fullName,
            //: localStorage.getItem("user:detail")
            avatar: avatar
        }
        // addToFirrebase(chat)
        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }

    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")
    }

    function ChatsList() {
        return chats.map((chat, index) => {
            if (chat?.user === user?.fullName) return <ChatBoxSender key={index} message={chat?.message} avatar={chat?.avatar} user={chat?.user} />
            return <ChatBoxReciever key={index} message={chat?.message} avatar={chat?.avatar} user={chat?.user} />
        })
    }


    return (
        <div>
            {
                user ? (
                    <div>
                        <ChatsList />
                        <InputText addMessage={addMessage} />
                    </div>)
                    : (<div>Login</div>)
                // <UserLogin setUser={setUser} />

            }

        </div>
    )
}