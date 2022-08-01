import axios from 'axios'
import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'
import { ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM } from './Type'

const Request = () => {
    return {
        type: USER_SEND_REQUEST
    }
}

const getRequest = (products) => {
    return {
        type: USER_GET_REQUEST,
        payload: products
    }
}

const getError = (error) => {
    return {
        type: GET_ERROR,
        error: error
    }
}

export const allItems = (items) => {
    return {
        type: ADD_ITEM,
        payload: items
    }
}

export const getAllItem = (items) => {
    return {
        type: GET_ALL_ITEMS,
        payload: items
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

// export const featchData = () => {
//     return (dispatch) => {
//         dispatch(Request());
//         axios.get('https://dummyjson.com/products')
//             .then(response => {
//                 // console.log(response.data.products);
//                 const products = response.data.products;
//                 dispatch(getRequest(products));
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(getError(error));
//             });
//     }
// }

export const featchData = () => {

    return (dispatch) => {
        dispatch(Request());
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                const products = response.data;
                dispatch(getRequest(products));
            })
            .catch(error => {
                console.log(error);
                dispatch(getError(error));
            });
    }
}

export const addNewProduct = (title, price, description, image, category) => {
    let param = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    }
    return (dispatch) => {
        dispatch(Request());
        axios.post('https://fakestoreapi.com/products', param)
            .then(response => {
                console.log(response.data);
                const products = response.data;
                dispatch(getRequest(products));
            })
            .catch(error => {
                console.log(error);
                dispatch(getError(error));
            });
    }
}