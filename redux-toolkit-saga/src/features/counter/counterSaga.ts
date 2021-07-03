import { takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Log', action);
}

export default function* counterSaga() {
  console.log('Counter saga');
  yield takeEvery(increment().type, log);
}
