import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateTransaction.css'; // Подключаем CSS-файл

function CreateTransaction() {
    const [formData, setFormData] = useState({
        dateTime: '',
        author: '',
        sum: '',
        category: '',
        comment: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/transaction', formData);
            navigate('/transactions');
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Create New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date & Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Sum:</label>
                    <input
                        type="number"
                        name="sum"
                        value={formData.sum}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Comment:</label>
                    <input
                        type="text"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>
                <button className="submit-btn" type="submit">Create Transaction</button>
            </form>
        </div>
    );
}

export default CreateTransaction;
