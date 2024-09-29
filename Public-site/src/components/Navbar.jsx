
import { Link, useNavigate } from "react-router-dom"


export default function Navbar() {


    // function handleLogout() {
    //     localStorage.clear()
    //     setPage('login')
    // }


    return (
        <>
            <nav className="navbar bg-gray px-7 py-3 shadow-md">
                <div className="navbar-center">

                    <Link to="/" className="btn btn-ghost normal-case text-3xl underline underline-offset-4 text-gray-1000">
                        <span className="text-accent">Tech Blog</span>
                    </Link>
                </div>

            </nav>

        </>
    )
}