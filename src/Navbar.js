import { Link } from 'react-router-dom';
import './Navbar.css'; // Подключаем CSS-файл

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/create-transaction">Create Transaction</Link>
            <Link className="nav-link" to="/transactions">View Transactions</Link>
        </nav>
    );
}

export default Navbar;
