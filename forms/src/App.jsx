import "./App.css";
import {useForm} from "react-hook-form";
import { useState } from "react";

function App(){

const[click,setclick]=useState(false)

const{register, handleSubmit, formState: {errors}}=useForm()

const emailformat = (input)=>{
return input.includes("@")||"Invalid Email"
}

const clickedonSubmit= (info)=>{
 console.log(info)
 setclick(true)
}

return(
    <form className="form" onSubmit={handleSubmit(clickedonSubmit)}>
        {click? <p>Registeration Successful!!</p>:null}

        <input {...register("firstname",{required : true})} type="text" placeholder="First Name"/>
        {errors.firstname && errors.firstname.type==="required" ? (<span>Enter your First Name</span>):null}

        <input  {...register("lastname", {required : true})} type="text" placeholder="Last Name" />
        {errors.lastname && errors.lastname.type==="required" ? (<span>Enter your Last Name</span>):null}

        <input {...register("email", {required : true, validate: emailformat})} type="email" placeholder="Email"/>
        {errors.email && errors.email.type==="required" ? (<span>Enter your Email</span>):null}
        {errors.email ? (<span>{errors.email.message}</span>):null}

        <input {...register("password", {required : true, maxLength: 20, minLength: 5})} type="password" placeholder="Password"/>
        {errors.password && errors.password.type==="required" ? (<span>Enter your Password.</span>):null}
        {errors.password && errors.password.type==="maxLength" ? (<span>Password length should not be more than 20 characters</span>):null}
        {errors.password && errors.password.type==="minLength" ? (<span>Password length should not be less than 5 characters</span>):null}

        <button type="submit" className="submit">Submit</button>
    </form>
)
}
export default App