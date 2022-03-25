import React from 'react';
import {useContext} from 'react'
import AccountBody from '../../Users/components/userAccountBody.js'
import LoginContext from "../../Restaurants/contexts/LoginContext"

 const AccountPage = ({responsivewidth}) => {
   const {name,email}=useContext(LoginContext)
  return (<React.Fragment>
    <AccountBody responsivewidth={responsivewidth} name={name} email={email}/>
  </React.Fragment>);
};
export default AccountPage
