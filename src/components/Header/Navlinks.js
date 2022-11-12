import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
    
    return (
        <div>
            <div style={{ marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <NavLink style={{ margin: '0 10px' }} to='/dashboard'>Dashboard</NavLink>
                </div>
                <div>
                    <NavLink style={{ margin: '0 10px' }} to='/'>Home</NavLink>
                    <NavLink style={{ margin: '0 10px' }} to='/about'>About</NavLink>
                    <NavLink style={{ margin: '0 10px' }} to='/contact'>Contact</NavLink>
                    <NavLink style={{ margin: '0 10px' }} to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navlinks;