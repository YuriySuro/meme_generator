import React from 'react';
import Header from './header';
import MemeGenerator from './memegenerator';
import ControlledForm from './controlledForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/styles.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <MemeGenerator />
            <ControlledForm />
        </div>
    )
};

export default App;