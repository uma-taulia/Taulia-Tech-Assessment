import React, { useState } from "react";
import "../../dist/styles.css";

const PasswordInput = (props) => {

  const [ inputText, setInputText ] = useState([]);
  const [ isNumber, setIsNumber ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ isEmailMatch, setIsEmailMatch ] = useState(false);

  const ifWithinLimit = (input) => {
    if (input.length >= 8 && input.length <= 72) {
      return true
    } else {
      return false;
    }
  }

  const doesContainUppercase = (input) => {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase() && isNaN(input[i]) === true) {
          return true;
        }
    }
    return false;
  }

  const doesContainLowercase = (input) => {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[i].toLowerCase() && isNaN(input[i]) === true) {
          return true;
        }
    }
    return false;
  }

  const doesContainNumber = (input) => {
    for (var i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        return true;
      }
    }
    return false;
  }

  const toggleShow = () => {
    setShowPassword(prevState => !showPassword);
  }

  return (
    <div>
      <div className="passwordInput">
        <p>Password</p>
        {
          !showPassword ?
          <div>
            <input type="password" onChange={(e) => setInputText(event.target.value)} value={inputText}/>
            <button onClick={toggleShow}>Show</button>
          </div> :
          <div>
            <input onChange={(e) => setInputText(event.target.value)} value={inputText}/>
            <button onClick={toggleShow}>Hide</button>
          </div>
        }
      </div>
      <div className="requirements">
        <ul>
          {
            ifWithinLimit(inputText) ?
            <li className="metRequirement">8-72 Characters</li> :
            <li>8-72 Characters</li>
          }
          {
            doesContainUppercase(inputText) ?
            <li className="metRequirement">1 Uppercase Character</li> :
            <li>1 Uppercase Character</li>
          }
          {
            doesContainLowercase(inputText) ?
            <li className="metRequirement">1 Lowercase Character</li> :
            <li>1 Lowercase Character</li>
          }
          {
            doesContainNumber(inputText) ?
            <li className="metRequirement">1 Number</li> :
            <li>1 Number</li>
          }
          <li>Should Not Match Your Email Address</li>
        </ul>
      </div>
    </div>
  )

}

export default PasswordInput;




// {
//   inputText.length >= 8 && inputText.length <= 72 ?
//   <li className="metRequirement">8-72 Characters</li> :
//   <li>8-72 Characters</li>
// }