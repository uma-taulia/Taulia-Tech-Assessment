import React, { useState, useEffect } from "react";
import axios from "axios";
import PasswordInput from "./PasswordInput.jsx";

const App = () => {

  const [ mainTitle, setMainTitle ] = useState([]);
  const [ userName, setUserName ] = useState([]);
  const [ userEmail, setUserEmail ] = useState([]);

  useEffect(() => {
    getTitle();
    getUserInfo();
  }, [])

  const getTitle = () => {
    axios.get("/title")
    .then(response => {
      setMainTitle(response.data);
    })
    .catch(err => {
      console.log("Error received during Axios GET request.", err);
    })
  }

  const getUserInfo = () => {
    axios.get("https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813")
    .then(response => {
      setUserName(response.data.user.name);
      setUserEmail(response.data.user.email);
      // console.log("response.data: ", response.data);
    })
    .catch(err => {
      console.log("Error received during Axios GET request.", err);
    })
  }

    return (
      <div>
        <h1>{mainTitle}</h1>
        <h3>Position: UI Software Engineer</h3>
        <h3>Applicant: Jean-Luc Felix</h3>
        <p>Email</p>
        <input value={userEmail}/>
        <PasswordInput
        userName={userName}
        userEmail={userEmail} />
      </div>
    )

}

export default App;