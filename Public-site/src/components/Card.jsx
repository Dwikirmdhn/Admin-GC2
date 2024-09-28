import { useNavigate } from "react-router-dom"


export default function Card({ posts }) {
    const navigate = useNavigate()

    function handleSeeDetail(id) {
        navigate(`detail/${id}`)
    }

    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure className="overflow-hidden rounded-t-lg">
                    <img
                        src={posts.imgUrl}
                        alt="posts"
                        className="w-full h-80 object-cover border-b border-gray-200" // Menyesuaikan ukuran gambar agar rapih
                    />
                </figure>
                <div className="card-body">
                    <h1 className="card-title">{posts.title}</h1>
                    <p>
                        {posts.content.length > 150
                            ? `${posts.content.slice(0, 150)}...`
                            : posts.content}
                    </p>
                    <button
                        className="btn btn-accent btn-sm"
                        onClick={() => handleSeeDetail(posts.id)}
                    >
                        Read article »
                    </button>
                </div>
            </div>
        </>

    )
}