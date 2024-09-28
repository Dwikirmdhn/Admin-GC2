import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from '../assets/Infinity@1x-1.0s-200px-200px (1).svg'




export default function Detail({ url }) {
    const [posts, setPosts] = useState("")
    const [loading, setLoading] = useState(false)
    const { id } = useParams()


    async function fetchPosts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${url}/apis/pub/blog/posts/${id}`)

            setPosts(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            {loading ? (
                <div className="flex flex-col justify-end items-center h-60">
                    <img src={Loading} className="h-10" />
                </div>
            ) : (
                <div className="bg-base-100 min-h-screen py-8">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-5xl font-bold text-white-900 mb-4">{posts.title}</h1>
                        {/* <p className="text-lg text-gray-600 mb-6">{posts.content}</p> */}
                    </div>


                    <div className="max-w-5xl mx-auto">
                        <img src={posts.imgUrl} alt="Blog visual" className="w-full h-auto rounded-lg shadow-md" />
                    </div>


                    <div className="max-w-4xl mx-auto px-4 mt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="Author"
                                className="rounded-full w-10 h-10"
                            />
                            <div>
                                <p className="text-sm text-white-700">by Admin</p>
                                <p className="text-sm text-white-500">{new Date(posts.createdAt).toLocaleDateString("id-ID", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-white-800 mb-4">{posts.content}</h2>
                        {/* <p className="text-white-700 leading-relaxed">{posts.content}</p> */}
                    </div>
                </div>
            )}
        </>

    )
}

