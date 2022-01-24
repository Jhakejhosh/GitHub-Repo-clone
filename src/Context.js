import React, { useContext, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [inputUsername, setInputUsername] = useState("");
    const [displayUser, setDisplayUser] = useState([]);
    const [displayOwner, setDisplayOwner] = useState([]);

    const displayClick = (e) => {
        e.preventDefault();
        setInputUsername(inputUsername)
 
        axios.get(`https://api.github.com/users/${inputUsername}/repos`)
          .then(resp => {
              setDisplayUser(resp.data);
          })
          .catch(err => {
              console.log(err)
          });

          axios.get(`https://api.github.com/users/${inputUsername}`)
          .then(resp => {
              setDisplayOwner(resp.data);
          })
          .catch(err => {
              console.log(err)
          });
     }

    return <AppContext.Provider value={{
        inputUsername, setInputUsername, displayClick, setDisplayUser, displayUser,
        displayOwner
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}