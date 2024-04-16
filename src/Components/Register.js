import React from "react";
import Styled from "styled-components";
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
    const StyledButton = Styled.button`
    display:block;
    padding:10px 5px;
    background-color:orange;
    border:none;
    color:white;
    width:100%;
    margin:5px ;
    `;
    const StyledDiv = Styled.div`
    background:purple;
    height:200px;
    width:400px;
    `;
    const StyledRegisterContainer = Styled.div`
    width:550px;
    &:hover{
        box-shadow:0px 0px 70px purple;
    }
    @media (min-width:0px) and (max-width:550px){
        width:300px;
    }
    `;
    // register-container
        return <StyledRegisterContainer className="container card p-3 mt-2  App-header">
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
            <StyledButton type="button">Login</StyledButton>
            <StyledButton type="button">T & C</StyledButton>
            <StyledDiv>
                <h3>This inbuild styled div</h3>
            </StyledDiv>
            </form>
        </StyledRegisterContainer>
}