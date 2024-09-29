import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import Loading from "../assets/Infinity@1x-1.2s-200px-200px.svg";

export default function Home({ }) {
  const [posts, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  async function fetchPost() {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/blog/posts`, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      setProducts(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  const formatDate = (date) => {
    // console.log(date);
    let newDate = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return newDate.toLocaleDateString("id-ID", options);
  };


  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  function handleChangeImage(id) {
    navigate(`/patch/${id}`);
  }

  async function handleDelete(id) {
    try {
      const { data } = await axios.delete(`https://h8-phase2-gc.vercel.app/apis/blog/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      fetchPost();

      Toastify({
        text: `Succedd delete data`,
        duration: 3000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#008000",
        },
        onClick: function () { }, // Callback after click
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 3000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FF0000",
        },
        onClick: function () { }, // Callback after click
      }).showToast();
    }
  }
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
      {/* Main Content */}
      < main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">Posts</h2>

        {/* Table Section */}
        <div className="mt-8">
          <div className="overflow-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-center">No</th>
                  <th className="py-3 px-6 text-center">Image</th>
                  <th className="py-3 px-6 text-left">Title</th>
                  <th className="py-3 px-6 text-left">Content</th>
                  <th className="py-3 px-6 text-center">Writer</th>
                  <th className="py-3 px-6 text-center">Published</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              {loading ? (
                <div className="mt-32 flex justify-center items-center">
                  <img src={Loading} />
                </div>
              ) : (
                <tbody className="text-gray-600 text-sm font-light">
                  {posts.map((post, i) => (
                    <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-center">{i + 1}</td>
                      <td className="py-3 px-6 flex justify-center">
                        <img className="w-16 h-16 object-cover rounded-full" src={post.imgUrl} alt="Post Image" />
                      </td>
                      <td className="py-3 px-6 text-left font-semibold">{post.title}</td>
                      <td className="py-3 px-6 text-left truncate max-w-xs">
                        {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                      </td>
                      <td className="py-3 px-6 text-center">{post.User.username}</td>
                      <td className="py-3 px-6 text-center">{formatDate(post.updatedAt)}</td>
                      <td className="py-3 px-6 flex justify-center gap-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                          onClick={() => handleEdit(post.id)}
                        >
                          <i className="fa fa-edit"></i> Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                          onClick={() => handleDelete(post.id)}
                        >
                          <i className="fa fa-trash"></i> Delete
                        </button>
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                          onClick={() => handleChangeImage(post.id)}
                        >
                          <i className="fa fa-image"></i> Change Image
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
