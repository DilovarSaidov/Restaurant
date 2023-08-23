import {combineReducers} from '@reduxjs/toolkit'
import basket from './basket'


const rootReducer=combineReducers({
   basket,
})

export default rootReducer