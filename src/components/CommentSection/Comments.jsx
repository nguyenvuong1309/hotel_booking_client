import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import moment from 'moment';
import SimpleDateTime from 'react-simple-timestamp-to-date';

import { format } from "date-fns";
import { formatISO9075 } from "date-fns";





const Comments = ({ currentPlaceId }) => {
    const PlaceId = useParams();
    const { user } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState([]);
    const [loadComments, setLoadComments] = useState(false);

    async function handleCreateComment(ev) {
        ev.preventDefault();
        if (user) {
            try {
                const commenter = user?.name;
                const placeId = PlaceId?.id;
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-comment`, {
                    method: 'POST',
                    body: JSON.stringify({ placeId, message, commenter }),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
                if (response.ok) {
                    response.json().then(data => {
                        const newComments = comments.push(data);
                        setComments(newComments)
                        setLoadComments(!loadComments)
                    })
                } else {
                    alert("Wrong credentials");
                }
                setMessage("");
            }
            catch (e) {
                console.log(e)
                alert("Login failed");
            }
        } else {
            alert("you are not login in");
        }
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/comments/${PlaceId.id}`, {
            credentials: 'include',
        }).then(response => {
            response.json().then(data => {
                console.log("🚀 ~ file: Comments.jsx:55 ~ response.json ~ data:", data)
                setComments(data)
            });
        });
    }, [loadComments]);
    return (
        <div className="">
            <h3 className="">Comments</h3>
            <div className="comment-container">
                {comments.length > 0 && comments.map(comment => (
                    <div key={comment._id}>
                        {PlaceId.id == comment.placeId ? (
                            <div key={comment?._id} className="mb-10 mt-10">
                                <div className="flex gap-2 items-center">
                                    <div className="bg-slate-600 w-10 h-10 flex justify-center items-center rounded-full">
                                        <div>
                                            <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold">
                                        {comment?.commenter}
                                    </div>
                                    <div className="mt-0 text-sm font-light">
                                        {moment(moment?.createdAt).format("dddd, MMM DD at HH:mm a")}
                                    </div>
                                </div>
                                <div>
                                    {comment?.message}
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                        }
                    </div>
                ))}
            </div>
            <div>
                Write your comment
            </div>
            <div className="flex bg-zinc-400 w-50 rounded-lg h-10 items-center gap-5 justify-start">
                <input className="h-5 w-96 ml-10 rounded-lg"
                    value={message}
                    onChange={ev => setMessage(ev.target.value)}
                />
                <button className="w-14 rounded-lg" onClick={handleCreateComment}>
                    send
                </button>
            </div>
        </div>
    )
};

export default Comments;