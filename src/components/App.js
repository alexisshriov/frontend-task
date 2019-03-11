// const rootElem = document.getElementById('root');
// const html = rootElem.innerHTML;
// rootElem.innerHTML = 'Welcome to the Adeva take home test. Please follow the instructions in the README and have fun 😃.';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Dashboard from './dashboard/Dashboard';
import { saveState } from '../store/localStorage';

const store = configureStore();

store.subscribe(()=>{
    saveState(store.getState())
})

const App = () => {
    
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default App;
