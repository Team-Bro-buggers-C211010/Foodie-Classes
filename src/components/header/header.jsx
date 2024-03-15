import login from '../../image/login.png';
const Header = () => {
    return (
        <>
            <div className="bg-base-100">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#150B2BB2] text-base">
                            <li className='font_lexend'><a>Home</a></li>
                            <li className='font_lexend'><a>Recipes</a></li>
                            <li className='font_lexend'><a>About</a></li>
                            <li className='font_lexend'><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl md:text-3xl font_lexend font-bold">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base">
                            <li className='font_lexend'><a>Home</a></li>
                            <li className='font_lexend'><a>Recipes</a></li>
                            <li className='font_lexend'><a>About</a></li>
                            <li className='font_lexend'><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex">
                            <label className="hidden md:flex input input-bordered flex items-center gap-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 opacity-70 w-6"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            <div className="dropdown dropdown-end">
                                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full bg-[#0BE58A] p-2">
                                        <img src={login} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header