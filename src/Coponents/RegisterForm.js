import {FormValidator} from './FormValidator'
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const RegisterForm = ({Register,error}) => {
    const [details, setDetails] = useState({name: "",age: 0,email:"",password:""});
    const submitHandler = e => {
        e.preventDefault();
        Register(details);
        Login();
    }
    const history = useHistory();

    const Login = () => {
        history.push("/");
    }
    return(
        <div className="form-box">
            <form className="form-contents"  onSubmit={submitHandler} align="center">
                <div className="form-inner">
                    <h1>Register<span className="wrap"></span></h1>
                    {(error!="")?(<div className="error">{error}</div>):""}
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="name">Age: </label>
                        <input type="number" name="age" id="age" onChange={e => setDetails({...details,age:e.target.value})} value={details.age} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email">Email: </label> 
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details,password:e.target.value})} value={details.password} />
                    </div>
                    <br />
                    <br />
                    <input className="button" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    );
}