import { useEffect, useState } from "react";
import axios from "axios";


export default function PostsForm({ baseUrl, post, handleSubmit, nameProp }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/blog/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });
            setCategories(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setImgUrl(post.imgUrl);
            setCategoryId(post.categoryId);
        }
    }, [post]);

    return (
        <>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden m-2 p-2">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">
                        {nameProp}
                    </h1>
                    <form
                        className="space-y-4"
                        onSubmit={(e) =>
                            handleSubmit(e, title, content, imgUrl, categoryId)
                        }>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="w-full input input-bordered"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title || ""}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder=" Enter Description"
                                className="w-full input input-bordered"
                                onChange={(e) => setContent(e.target.value)}
                                value={content || ""}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Image (URL)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Image URL"
                                className="w-full input input-bordered"
                                onChange={(e) => setImgUrl(e.target.value)}
                                value={imgUrl || ""}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Category</span>
                            </label>
                            <select
                                className="w-full input input-bordered input-primary"
                                onChange={(e) => setCategoryId(e.target.value)}
                                title="category"
                                id=""
                                value={categoryId}>
                                <option value="">Select a category</option>
                                {categories.map((category) => {
                                    return (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <br />
                        <div>
                            {/* Submit Button */}
                            <div>
                                <button type="submit" className="float-right bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                                    {nameProp}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}