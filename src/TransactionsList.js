import { useEffect, useState } from 'react';
import axios from 'axios';
import './TransactionsList.css'; // Подключаем CSS-файл

function TransactionsList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/transactions');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="transactions-container">
            <h2>Transactions</h2>
            <ul className="transactions-list">
                {transactions.map(transaction => (
                    <li className="transaction-item" key={transaction.id}>
                        <p><strong>Date:</strong> {new Date(transaction.dateTime).toLocaleString()}</p>
                        <p><strong>Author:</strong> {transaction.author}</p>
                        <p><strong>Sum:</strong> {transaction.sum}</p>
                        <p><strong>Category:</strong> {transaction.category}</p>
                        <p><strong>Comment:</strong> {transaction.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsList;
