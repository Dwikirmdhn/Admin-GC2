import { useState } from "react";
import axios from "axios";
import Toastify from "toastify-js"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    async function handleAddUser(e) {
        e.preventDefault();
        try {
            const body = { email, password, username, phoneNumber, address };

            const { data } = await axios.post(`https://h8-phase2-gc.vercel.app/apis/add-user`, body, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` },
            });

            navigate("/");
            Toastify({
                text: `Succedd add user`,
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

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md animate-fadeIn transform transition-transform duration-300 ease-out hover:scale-105 border border-gray-200">
                    <h1 className="text-3xl font-semibold text-center text-gray-600 mb-6">
                        Add New User
                    </h1>

                    <form className="space-y-4" onSubmit={handleAddUser}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-gray-700">Username*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="w-full input input-bordered input-accent bg-white-100"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-gray-700">Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full input input-bordered input-accent bg-white-100"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-gray-700">Password*</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-accent bg-white-100"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-gray-700">
                                    Phone Number*
                                </span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full input input-bordered input-accent bg-white-100"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-gray-700">Address*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="w-full input input-bordered input-accent bg-white-100"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="float-right bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-500">
                                Add User
                            </button>
                            <button
                                type="button"
                                className="float-right bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-500"
                                onClick={() => navigate("/")}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}
