import React, {Fragment} from 'react';
import './App.css';
import Form from './components/Form';

function App() {
    return (
        <Fragment>
            <div className="container pt-5">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Form/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
