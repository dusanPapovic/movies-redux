import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import moviesReducer from "./movies/slice";
import sagas from "./sagas";

const reducers = {
movies: moviesReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;