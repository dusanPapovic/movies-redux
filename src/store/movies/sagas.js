import { put, takeLatest, call } from "@redux-saga/core/effects";
import movieService from "../../services/MovieService";
import {
  getMovies,
  setMovies,
} from "./slice";

function* handleGetMovies(action) {
  try {
    const movies = yield call(movieService.getAll, action.payload);
    yield put(setMovies(movies));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetMovies() {
  yield takeLatest(getMovies.type, handleGetMovies);
}
