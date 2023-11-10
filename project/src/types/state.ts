import {store} from '../store/store.js';

export type State = ReturnType<typeof store.getState>;

