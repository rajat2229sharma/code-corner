import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navlinks = () => {

    const [ logValue, setLoginValue ] = useState(false);
    const navigate = useNavigate();
    const login = localStorage.getItem('login');

    const handleLogout = () => {
        localStorage.clear();
        navigate('./login');
    };

    useEffect(() => {
        setLoginValue(login || false);
    }, [login])
    
    return (
        <div>
            <div style={{ padding: '2rem 0', backgroundColor: 'gray', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <NavLink style={{ fontWeight: 'bold', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '22px' }} to='/dashboard'>Dashboard</NavLink>
                </div>
                <div>
                    <NavLink style={{ fontWeight: '500', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/'>Home</NavLink>
                    <NavLink style={{ fontWeight: '500', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/about'>About</NavLink>
                    <NavLink style={{ fontWeight: '500', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/contact'>Contact</NavLink>
                    {logValue ? <button onClick={handleLogout} style={{ border: 'none', backgroundColor: 'transparent', fontWeight: '500', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '18px' }}>Logout</button> : <NavLink style={{ fontWeight: '500', margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '18px' }} to='/login'>Login</NavLink>}
                </div>
            </div>
        </div>
    )
}

export default Navlinks;