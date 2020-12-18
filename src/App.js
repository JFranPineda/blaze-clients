import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import GridClass from './GridClass';
import GridFullClass from './GridFullClass';
import Home from './Home';

const App = () => {
    // ThemeHook could be an OBJECT or a STRING
    // ThemeHook shouldn't be a HOOK
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">
                        Welcome Blaze Engineer!
                    </Link>
                </header>

                <Router>
                    <Home path="/" />
                    <GridClass path="/grid-client" />
                    <GridFullClass path="/grid-full-client" />
                </Router>
            </div>
        </React.StrictMode>
    )
};

render(React.createElement(App), document.getElementById("root"));
