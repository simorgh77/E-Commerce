import React ,{useReducer,createContext} from 'react'
import  { ReactChildren, ReactChild } from 'react';

interface IChild{
    children:ReactChild | ReactChildren
}

const initialState={
    province:'',
    city:'',
    postAddress:'',
    postalCode:'',
    plaque:'',
    unity:'',
    familyName:'',
    mobile:''
}


function reducer(state:any,action:any){
    switch(action.type){

        case 'add_address':
            return {state:action.payload}
        
        default:
            return state
    }

}
export const Address_context=createContext(initialState)

const AddressContext:React.FC<IChild> = ({children}) => {
    const [state, contextdispatch] = useReducer<any>(reducer, initialState)
    const value:any={state,contextdispatch}
    return (
        <Address_context.Provider value={value}>
{children}
        </Address_context.Provider>
    )
}

export default AddressContext
