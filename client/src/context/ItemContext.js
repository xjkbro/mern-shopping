import React, {useState, createContext, useReducer} from 'react';
import axios from 'axios'

import { 
    ItemReducer,
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    LOADING_ITEMS
    } from './reducer/ItemReducer'

const initialState = {
    items:[],
    loading: false
}
//Create Context
export const ItemContext = createContext(initialState)

//Create Context Provider
export const ItemList = (props) => {
    const [state, dispatch] = useReducer(ItemReducer, initialState)

    const setLoading = (v) =>{
        dispatch({type: LOADING_ITEMS, payload: v})
    }
    const getItems = async()  => {
        setLoading(true)
        await axios
            .get('/api/item')
            .then(res => {
                dispatch({
                type: GET_ITEMS,
                payload: res.data
                })
            })
        setLoading(false)
    }
              
        
    const addItem = (item) => {

    axios
        .post('/api/item',item)
        .then(res => {
            console.log(res.data)
            dispatch({
            type: ADD_ITEM,
            payload: res.data
            })}
        )
    }

    const deleteItem = (id) => {
        console.log("helo " + id)
        
        axios
            .delete(`/api/item/${id}`)
            .then(res =>{
                console.log("helo")
                console.log(res.data)
                
                dispatch({
                type: DELETE_ITEM,
                payload: id
                })}
            )
    }
    return(
        <ItemContext.Provider 
            value={{
                loading: state.loading,
                items: state.items,
                getItems: getItems,
                addItem: addItem,
                deleteItem: deleteItem,
                }}>
            {props.children}
        </ItemContext.Provider>
    );
}

