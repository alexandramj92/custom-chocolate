import React from 'react';

import Nav from '../../components/Navbar';

import './Layout.scss';


const Layout = (props) => {

    return (
        <div>
            
            <Nav />
            <main className="content">{props.children}</main>

        </div>
    )
}


export default Layout;
