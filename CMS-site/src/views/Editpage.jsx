import { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from 'axios'
import Toastify from 'toastify-js'
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage({ }) {
    const [posts, setPosts] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    async function handleSubmit(e, title, content, imgUrl, categoryId) {
        e.preventDefault()
        try {
            const body = { title, content, imgUrl, categoryId: +categoryId }

            const { data } = await axios.put(`https://h8-phase2-gc.vercel.app/apis/blog/posts/${id}`, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                }
            })
            navigate("/")
            Toastify({
                text: `Succedd edit posts`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#008000",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        } catch (error) {
            console.log(error);
            Toastify({
                text: error.response.data.error,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#FF0000",
                },
                onClick: function () { } // Callback after click
            }).showToast();

        }
    }

    async function fetchPosts() {
        try {
            const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/pub/blog/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                }
            })

            setPosts(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <Form post={posts} handleSubmit={handleSubmit}
                nameProp="Edit Post" />
        </>
    )
}