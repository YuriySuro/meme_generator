import React from 'react';
import Header from './header';
import MemeGenerator from './memeGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/styles.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <MemeGenerator />
        </div>
    )
};

export default App;