import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadState } from './localStorage';

const persitedState = loadState()
const initialState = {
    notes: [
        {id:'d46j', title: 'first title', text: 'first text fdsfkj sdfsdkj' },
        {id:'aw54', title: 'second title', text: 'second text fdsfkj erte ersdfsdkj' },
        {id:'j48s', title: 'third title', text: 'third erte ersdfsdkj' },
    ]
};

function configureStore() {
    return createStore(rootReducer, persitedState || initialState);
}

export default configureStore;
