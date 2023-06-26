import React from "react"

const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button 
    style={{marginRight: "10px"}}
    className={buttonText === reqType ? "selected": null}
    type="button"
    onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button