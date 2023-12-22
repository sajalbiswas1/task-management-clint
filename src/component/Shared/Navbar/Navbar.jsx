import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl m-auto">
            <div className="navbar-start">
                <details className="dropdown">
                    <summary className="m-1 btn lg:hidden"><IoMdMenu /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[2] bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </details>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">LogIn</a>
            </div>
        </div>
    );
};

export default Navbar;