import React, { useState } from "react";

const PasswordInput = (props) => {

  const [ inputText, setInputText ] = useState([]);
  const [ isLimit, setIsLimit ] = useState(false);
  const [ isUpperCase, setIsUpperCase ] = useState(false);
  const [ isLowerCase, setIsLowerCase ] = useState(false);
  const [ isNumber, setIsNumber ] = useState(false);
  const [ isEmailMatch, setIsEmailMatch ] = useState(false);

  return (
    <div>
      <div className="passwordInput">
        <p>Password</p>
        <input onChange={(e) => setInputText(event.target.value)} value={inputText}/>
        <button>Show</button>
      </div>
      <div className="requirements">
        <ul>
          <li>8-72 Characters</li>
          <li>1 Uppercase Character</li>
          <li>1 Lowercase Character</li>
          <li>1 Number</li>
          <li>Should Not Match Your Email Address</li>
        </ul>
      </div>
    </div>
  )

}

export default PasswordInput;