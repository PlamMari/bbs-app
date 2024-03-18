import { Link } from "react-router-dom"

const Header = ({ title }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header