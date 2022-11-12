import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('login', true);
        navigate('/dashboard');
    }

    useEffect(() => {
     let login = localStorage.getItem('login');
        if (login) {
            navigate('/dashboard');
        }
    })

    return (
        <div style={{ margin: '4rem auto', padding: '20px', borderRadius: '10px', width: '20%', backgroundColor: 'gray'}}>
            <div style={{ margin: '10px 0', textAlign: 'left' }}>
                <div style={{ color: 'white', margin: '5px 0' }}>Name</div>
                <input style={{ width: '100%', padding: '5px', borderRadius: '4px' }} type="text" />
            </div>
            <div style={{ margin: '10px 0', textAlign: 'left' }}>
                <div style={{ color: 'white', margin: '5px 0' }}>Password</div>
                <input style={{ width: '100%', padding: '5px', borderRadius: '4px', border: 'none' }}  type="password" />
            </div>
            <button onClick={handleSubmit} style={{ marginTop: '20px', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '4px' }}>Login</button>
        </div>
    )
}

export default Login;