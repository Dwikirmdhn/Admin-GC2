import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function patchImage() {
    const { id } = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function handleUpload(e) {
        e.preventDefault();
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", file);

            const { data } = await axios.patch(`https://h8-phase2-gc.vercel.app/apis/blog/posts/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });

            navigate("/");
            Toastify({
                text: data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#008000",
                },
                onClick: function () { }, // Callback after click
            }).showToast();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100">
                <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
                    <h1 className="text-3xl font-semibold text-center text-accent-focus">Change Image</h1>
                    {/* <img src={posts.imgUrl} alt="" /> */}

                    <form className="space-y-4" onSubmit={handleUpload}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Select File</span>
                            </label>
                            <input type="file" className="w-full input input-bordered input-accent" onChange={(e) => { setFile(e.target.files[0]) }} />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-accent">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}