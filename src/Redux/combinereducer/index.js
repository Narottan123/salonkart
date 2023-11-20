
import { combineReducers } from 'redux';
import { addProduct } from '../reducers';
import { authReducer } from '../reducers';
import { paymentTotalAmount } from '../reducers';




const rootReducer=combineReducers({
   addProduct,
   authReducer,
   // paymentTotalAmount

    
})
export default rootReducer;