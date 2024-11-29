// src/components/layout/Layout.js

import React from 'react';
import Header from '../common/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
