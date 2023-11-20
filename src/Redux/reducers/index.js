
const Initalstate = {
    count: 0,
    cart: [],
    cartTotalAmount: 0,
    userData: [],
    paymentData: [],
    products: [],
    filterData: []
}

const addProduct = (state = Initalstate, action) => {
    const { type, payload } = action
    // console.log('actiondata', state.products)
    switch (type) {
        case 'filterProductData':
            const productList = state.products
            console.log("filterProductData", payload)
            let filterList = []
            if(payload!=='')
            {
                filterList = productList?.filter((item) => item.category == payload)
            }
            else{
                filterList= productList.filter( sliderprice => {
                    console.log("sliderprice",sliderprice)
                    return sliderprice.price > parseInt(payload, 10)
                    } 
                ) 
            }
       
            console.log("filterList".filterList)
      
            return {
                ...state, filterData:filterList

            }
        case 'addproduct':
            const newProduct = [action.payload];
            console.log("newProduct",newProduct)
      
            // const itemIndex = state.cart.findIndex((item) => item._id === payload._id)
            // if (itemIndex) {
            //     // state.cart[itemIndex].quantity+=1
            // }
            // else {
            //     // const temp={...action.payload,quantity:1}
            //     return {
            //         ...state,
            //         cart: [...state.cart],
            //     };
            // }
            return {
                ...state,
                cart:[...state.cart, ...newProduct]
        
              };
        case 'RemoveItem':
            return {
                ...state, cart: state.cart.filter((item) => item.id !== action.payload)
            }
        case 'CarttotalAmount':
            console.log("catotalcalledreducer", payload)
            return {
                ...state, cartTotalAmount: payload
            }
        case "cardTotalProduct":
            return {
                ...state, products: payload

            }
      


        default: return state;
    }

}
const removeCart = (state = Initalstate, action) => {
    // console.log("card",state)
    const itemremove = state.cart.filter((cart) => cart.id !== action.payload._id)

    state.cart = itemremove




}


const authReducer = (state = Initalstate, action) => {
    const { type, payload } = action
    console.log("payloaddata", payload)
    switch (type) {
        case 'SET_USERDETAILS':
            return {
                ...state, userData: payload

            }
        default: return state;
    }
}
const paymentTotalAmount = (state, action) => {
    const { type, payload } = action
    // console.log("payloaddata", payload)
    switch (type) {
        case 'payment_TotalAmount':
            return {
                ...state, paymentData: payload

            }
        default: return state;
    }

}
const filterProductReducer = (state, action) => {

}







export { addProduct, removeCart, authReducer, paymentTotalAmount, filterProductReducer }