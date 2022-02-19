import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(() => {
    getTitle();
  }, [])

  const getTitle = () => {
    axios.get("/title")
    .then(response => {
      console.log("response.data: ", response.data);
    })
    .catch(err => {
      console.log("Error received during Axios GET request.")
    })
  }

  return (
    <div>
      <h1>Hello from App Component!</h1>
    </div>
  )

}

export default App;