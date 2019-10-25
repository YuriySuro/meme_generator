import React from 'react';
import Header from './header';
import MemeGerator from './meme_generator';
import './../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="container"> 
            <Header />
            <MemeGerator />
        </div>
    );
}

export default App;