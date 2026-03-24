import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from "./userActions";
import { setLoading } from "./userSlice";

// Mock API
const fetchUsersApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

function* fetchUsersSaga() {
  try {
    yield put(setLoading());

    const data = yield call(fetchUsersApi);

    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// watcher
export function* userSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersSaga);
}