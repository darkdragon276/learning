import {applyMiddleware, combineReducers,createStore} from 'redux';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import thunk from 'redux-thunk'
import { NguoiDungReducer } from './reducers/NguoiDungReducer';
import { LichChieuReducer } from './reducers/LichChieuReducer';

const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    QuanLyPhimReducer,
    NguoiDungReducer:NguoiDungReducer,
    LichChieuReducer:LichChieuReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));