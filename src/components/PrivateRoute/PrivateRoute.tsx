import React ,{ReactNode ,FC, FunctionComponent} from 'react'
import { Redirect, Route } from 'react-router'
import {useSelector} from "react-redux"
import {RootState,AppDispatch} from '../../store/store'
import { TypedUseSelectorHook} from 'react-redux'
import { RouteComponentProps } from "react-router";
import { render } from '@testing-library/react'

interface IPrivatet{
    isRequired:boolean |undefined
    path:string
    exact:boolean
    Page:any
}
const PrivateRoute:React.FC<IPrivatet> = ({isRequired,path,exact,Page}) => {
debugger
    const isLogin = useSelector<RootState>(state =>
         state.persistedReducer.authReducer.Is_login)
 
    return (
        
            <Route  path={path} exact={exact} render={(location)=>
       ( (!isRequired) || (   isRequired&& isLogin))? 
        <Page/>
                  : 
                (<Redirect to={{pathname:'/login',
                state:{from :location}}}/>)}/>         
        
    )



}

export default PrivateRoute
