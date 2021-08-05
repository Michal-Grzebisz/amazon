import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constans/productConstans"
import axios from 'axios'

const listProducts = () => (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload:data});
    }
    catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload:error.message});
    }

}

export default { listProducts }