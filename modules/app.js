import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './reducers';
import Routes from './routes';

const store = createStore(
    allReducers
);

// ReactDOM.render(<Routes />, document.getElementById('app'));
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
