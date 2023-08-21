import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AllRoutes from './components/Routes.jsx';
import store from './State/Store/Store.jsx';

ReactDOM.render(

    <>
    <Provider store={store}>
        <AllRoutes/>
    </Provider>
    </>
, document.getElementById('root'));
