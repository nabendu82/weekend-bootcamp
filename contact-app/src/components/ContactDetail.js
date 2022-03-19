import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const user = contacts.find(contact => contact.id === parseInt(id));
        setUser(user);
    }, [])
    
    const randomNumber = () => {
        return Math.floor(Math.random() * 99) + 1;
    };

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={`https://randomuser.me/api/portraits/men/${randomNumber()}.jpg`} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{user.name}</div>
                    <div className="description">{user.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail