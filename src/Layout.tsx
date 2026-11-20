import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>

            <header className="w-full">
                <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">

                    <div className="hidden md:block w-28"></div>

                    <nav className="hidden md:flex items-center gap-10">

                        <Link to="/" className="hover:text-green-600">
                            Booking
                        </Link>

                        <Link to="/about" className="hover:text-green-600">
                            Facilities
                        </Link>

                        <Link to="/" className="hover:text-green-600">
                            About U
                        </Link>

                        <Link to="/" className="hover:text-green-600">
                            Location
                        </Link>

                        <Link to="/" className="hover:text-green-600">
                            Contact
                        </Link>

                    </nav>

                    <button className="md:hidden text-2xl">
                        ☰
                    </button>

                    <div className="md:w-28 flex justify-end">
                        <button className="bg-[#22a06b] text-white px-7 py-2.5 rounded-full">
                            Login
                        </button>
                    </div>

                </div>
            </header>

            <Outlet />

        </div>
    )
}

export default Layout