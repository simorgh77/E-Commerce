import React ,{useReducer,createContext} from 'react'
import  { ReactChildren, ReactChild } from 'react';

interface IChild{
    children:ReactChild | ReactChildren
}

const initialState={
 searchTitle:''
}


function reducer(state:any,action:any){
    switch(action.type){

        case 'add_title':
            return {state:action.payload}
        
        default:
            return state
    }

}
export const Search_context=createContext(initialState)

const Searchtitle:React.FC<IChild> = ({children}) => {
    const [state, searchdispatch] = useReducer<any>(reducer, initialState)
    const value:any={state,searchdispatch}
    return (
        <Search_context.Provider value={value}>
{children}
        </Search_context.Provider>
    )
}

export default Searchtitle
