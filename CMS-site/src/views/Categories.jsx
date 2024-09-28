import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../assets/Infinity@1x-1.0s-200px-200px (1).svg";


export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const access_token = localStorage.access_token;

    async function fetchCategories() {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/blog/categories`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            setCategories(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <>
            {/* Dashboard Widgets */}
            <main className="p-6 grid grid-cols-1 gap-6 bg-gray-50 min-h-screen">
                {/* Categories Widget */}
                <div className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
                    </div>
                    <div className="overflow-x-auto">
                        {loading ? (
                            <div className="mt-32 flex justify-center items-center">
                                <img src={Loading} className="w-16 h-16 animate-spin" alt="Loading" />
                            </div>
                        ) : (
                            <table className="min-w-full table-auto border-collapse text-gray-700">
                                <thead>
                                    <tr className="bg-blue-100 text-left text-blue-800">
                                        <th className="px-4 py-2 border font-medium">No</th>
                                        <th className="px-4 py-2 border font-medium">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category, index) => (
                                        <tr key={category.id} className="hover:bg-gray-100 transition-colors">
                                            <td className="px-4 py-2 border">{index + 1}</td>
                                            <td className="px-4 py-2 border">{category.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </main>

        </>
    );
}
