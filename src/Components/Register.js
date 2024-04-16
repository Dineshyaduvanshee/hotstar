import React from "react";

export default  function Register(props) {
  
    const btnStyle ={
        backgroundColor:"green",
        color:"white"
    };
    let btnText, passBoxType;
    let btnClasses = ["btn","m-2","btn-success"];
    if(props.showPass === true) {
        btnStyle.backgroundColor="red"  
        btnText = "Hide Password";
        passBoxType="text";
        btnClasses.push("btn-danger");
    }else{
        btnText = "Show Password";
        passBoxType = "password";  
        btnClasses.push("btn-success");     
    }
   
        return <div className="container card p-3 mt-2 register-container App-header">
            <form className="form-group" onSubmit={props.submit}>
             <h1 className="text-center">Registration Form</h1>
                <div>
                    <label htmlFor="">Name :</label>
                    <input type="text" name="name" required className="form-control"/>
                </div>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" name="email" required className="form-control"/>
                </div>
                <div>
                    <label htmlFor="">Password :</label>
                    <input type={passBoxType} name="password" required className="form-control"/>
                </div>
                <br/>
            <button type="submit" className="btn btn-primary">Register</button> 
            <button type="text" className={btnClasses.join(" ")} onClick={props.click} style={btnStyle}> {btnText}</button>
            </form>
        </div>
}