import { put, takeLatest, call } from "redux-saga/effects";
import api from "../api";
import type from "../actions/constant";

function* fetchRepoByRepoHandler(action) {
  try {
    const repos = yield call(api.fetchRepoByRepo, action.payload);
    yield put({ type: type.GET_REPOS_BY_REPO_SUCCESS, payload: repos });
  } catch (error) {
    yield put({ type: type.GET_REPOS_BY_REPO_FAILED });
  }
}

function* repoSaga() {
  yield takeLatest(type.GET_REPOS_BY_REPO_REQUEST, fetchRepoByRepoHandler);
}

export default repoSaga;
