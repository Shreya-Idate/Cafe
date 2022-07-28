import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from './Coponents/NavBar'
import {Dashboard} from './Coponents/Dashboard'
import { RegisterForm } from './Coponents/RegisterForm';
import {LoginForm} from './Coponents/LoginForm'
import { useState } from 'react';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import { Store } from './Coponents/Store';
import { Footer } from './Coponents/Footer';

function App() {
  
  const adminUser = {
  email: "admin@admin.com",
  password: "admin123"
  }

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");
  const history = useHistory();

  const Login = (details) => {
     console.log(details);

     if ((details.email == adminUser.email && details.password == adminUser.password) ||(details.email == user.email && details.password == user.password)){
       console.log("Logged in");
       setUser({
         name: details.name,
         email: details.email
       });
       
     } else {
       console.log("Details do no match!");
       setError("Details do no match!");
     }
   }

  const Logout = () => {
      //history.push("/");
      console.log("Logout");
      setUser({name: "", email: "", password: ""});
   }

  const SwitchToHome = () => {
    history.push("/home");
  }

  //  const SwitchToLogin = () =>{
  //   // history.push("/Login");
  //   this.props.router.push('/Login');
  //   // <Link to="/Login" />
  //  }

  //  const SwitchToRegister = () => {
  //   // history.push("/Register");
  //   this.props.router.push('/Register');
  //   // <Link to="/Register" />
  //  }

   const Register=(details)=>{
    console.log("Registered");
    console.log(details)
    if (details.email != "" && details.password != ""){
      setUser({
        name: details.name,
        email: details.email
      });
      // NewUser=user;
    } else {
      console.log("Email and password are necessary!");
      setError("Email and password are necessary!");
    }
   }
  return (
    <Router>
      <div className="App">
        <style>{'body {background-color: #ebe3d8 ;}'}</style>
        <div className='Home'>
          <Switch>
            
            <Route exact path="/home">
              <NavBar Logout={Logout} name={user.name}/>
              <Dashboard />
              <Footer />
            </Route>
            <Route exact path="/Register">
              <RegisterForm Register={Register} error={error}/>
            </Route>
            <Route exact path="/Store">
              <NavBar Logout={Logout} name={user.name} />
              <Store />
              <Footer />
            </Route>
            <Route exact path="/">
              {(user.email != "") ? (
                  
                    <div className='welcome'>
                      <NavBar Logout={Logout} name={user.name}/>
                      <Dashboard />
                      <Footer />
                    </div>
                    // ,{SwitchToHome}
                ) : (
                  <div>
                    <LoginForm Login={Login} error={error} />
                    {/* <button className="button" onClick={handleClick}>Sign up</button> */}
                  </div>
                )}
            </Route>
          </Switch>
          
        </div>
        
        {/* <NavBar />
        <Banner />
        <ProductsCarousel />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
