
import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'
import Loading from '../assets/Infinity@1x-1.0s-200px-200px (1).svg'

export default function HomePage({ url }) {
    const [posts, setposts] = useState([]);
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [sort, setSort] = useState("ASC");
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    async function fetchposts() {
        try {
            setLoading(true)

            const { data } = await axios.get(`${url}/apis/pub/blog/posts?q=${search}&page=${currentPage}&sort=${sort}&i=${selectedCategory}`)

            setTotalPage(data.data.pagination.totalPage)
            setCurrentPage(data.data.pagination.currentPage)
            setposts(data.data.query)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    async function fetchCategory() {
        try {
            const { data } = await axios.get(`${url}/apis/pub/blog/categories`);
            setCategory(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    function handlePreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNextPage() {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        fetchCategory();
        fetchposts();
    }, [search, currentPage, sort, selectedCategory])




    return (
        <>
            <div id="PAGE-HOME" className="p-5">
                <form action="" method="get" className="flex justify-center items-center my-4">

                    <select
                        className="mr-5 p-2 rounded-lg bg-sky-950 text-white border border-sky-700 shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition ease-in-out duration-150 hover:bg-sky-900"
                        name="order"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="DESC">Newest</option>
                        <option value="ASC">Oldest</option>
                    </select>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search for posts..."
                        className="input input-bordered input-accent w-full max-w-md mx-2 rounded-lg input-sm md:input-md"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <button type="submit" className="btn btn-primary btn-sm ml-2">Search</button> */}

                    <select
                        name="category"
                        className="mr-5 p-2 rounded-lg bg-sky-950 text-white border border-sky-700 shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition ease-in-out duration-150 hover:bg-sky-900"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {category.map((e) => (
                            <option key={e.id} value={e.name} className="text-black">
                                {e.name}
                            </option>
                        ))}
                    </select>
                </form>

                <div>
                    <h1 className="text-2xl font-bold text-primary mb-4 tracking-tight decoration-accent">
                        Popular Articles
                    </h1>

                </div>


                {loading ? (
                    <div className="flex flex-col justify-end items-center h-60">
                        <img src={Loading} className="h-10 w-10" />
                        <p>Loading...</p>
                    </div>
                ) : (
                    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-5">
                        {posts.map(posts => (
                            <Card posts={posts} key={posts.id} />
                        ))}
                    </main>
                )}
                <div className="flex justify-center pt-15">
                    <button
                        className="btn bg-white text-black border-0 hover:bg-slate-200"
                        onClick={(event) => handlePreviousPage(event)}
                    >
                        «
                    </button>
                    {Array.from({ length: totalPage }, (_, index) => (
                        <button
                            key={index}
                            className={`join-item btn `}
                            onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="btn bg-white text-black border-0 hover:bg-slate-200"
                        onClick={(event) => handleNextPage(event)}
                    >
                        »
                    </button>
                </div>
            </div>
        </>
    )
}