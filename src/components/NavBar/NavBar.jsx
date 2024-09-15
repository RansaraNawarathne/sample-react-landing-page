import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 id='landing-page-title'>Landing</h3>
                </div>
                <div>
                    <button className='nav-bar-button'>
                        Buy Now
                    </button>
                </div>
            </nav>
        </>
    );
}