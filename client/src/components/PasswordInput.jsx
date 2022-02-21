import React, { useState } from "react";
import "../../dist/styles.css";

const PasswordInput = (props) => {

  const [ inputText, setInputText ] = useState([]);
  const [ showPassword, setShowPassword ] = useState(false);

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

  const doesContainEmail = (input) => {
    if (typeof props.userName === "string" && input.length > 0) {

      const lowerCaseInput = input.toLowerCase();
      const lowerCaseEmail = props.userEmail.toLowerCase();
      const splitName = props.userName.split(" ");
      const firstName = splitName[0].toLowerCase();

      if (lowerCaseInput.includes(firstName) || lowerCaseInput.includes(lowerCaseEmail)) {
        return true;
      } else {
        return false;
      }
    }
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
          <div className="inputPassword">
            <div className="password">
              <input type="password" onChange={(e) => setInputText(event.target.value)} value={inputText}/>
            </div>
            <div className="showButton">
              <input type="checkbox" onClick={toggleShow} value={showPassword} />
              <label>Show</label>
            </div>
          </div>
          :
          <div className="inputPassword">
            <div className="password">
              <input onChange={(e) => setInputText(event.target.value)} value={inputText}/>
            </div>
            <div className="showButton">
              <input type="checkbox" onClick={toggleShow} value={showPassword} checked/>
              <label>Show</label>
            </div>
          </div>
        }
      </div>
      <div className="requirements">
        <ul>
          {
            ifWithinLimit(inputText) ?
            <div>
              <li className="metRequirement">8-72 Characters</li>
            </div>
            :
            <div>
              <li>8-72 Characters</li>
            </div>
          }
          {
            doesContainUppercase(inputText) ?
            <div>
              <li className="metRequirement">1 Uppercase Character</li>
            </div>
            :
            <div>
              <li>1 Uppercase Character</li>
            </div>
          }
          {
            doesContainLowercase(inputText) ?
            <div>
              <li className="metRequirement">1 Lowercase Character</li>
            </div>
            :
            <div>
              <li>1 Lowercase Character</li>
            </div>
          }
          {
            doesContainNumber(inputText) ?
            <div>
              <li className="metRequirement">1 Number</li>
            </div>
            :
            <div>
              <li>1 Number</li>
            </div>
          }
          {
            doesContainEmail(inputText) ?
            <div>
              <li>Should Not Match Your Email Address</li>
            </div>
            :
            <div>
              <li className="metRequirement">Should Not Match Your Email Address</li>
            </div>
          }
        </ul>
      </div>
    </div>
  )

}

export default PasswordInput;





// // BACKUP CODE

// <div className="requirements">
// <ul>
//   {
//     ifWithinLimit(inputText) ?
//     <li className="metRequirement">8-72 Characters</li> :
//     <li>8-72 Characters</li>
//   }
//   {
//     doesContainUppercase(inputText) ?
//     <li className="metRequirement">1 Uppercase Character</li> :
//     <li>1 Uppercase Character</li>
//   }
//   {
//     doesContainLowercase(inputText) ?
//     <li className="metRequirement">1 Lowercase Character</li> :
//     <li>1 Lowercase Character</li>
//   }
//   {
//     doesContainNumber(inputText) ?
//     <li className="metRequirement">1 Number</li> :
//     <li>1 Number</li>
//   }
//   {
//     doesContainEmail(inputText) ?
//     <li>Should Not Match Your Email Address</li> :
//     <li className="metRequirement">Should Not Match Your Email Address</li>
//   }
// </ul>
// </div>