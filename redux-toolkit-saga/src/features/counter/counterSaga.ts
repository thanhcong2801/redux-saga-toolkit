import { takeEvery, delay, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrement(action: PayloadAction<number>) {
  console.log('waiting 1s');
  yield delay(1000);
  console.log('waiting done');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrement);
  // yield takeLatest(incrementSaga.toString(), handleIncrement);
}
