import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/authentication";
import { Fragment, useState } from "react";
import UserProfile from "./UserProfile";
import {validActions} from "../store/validate";

const Auth = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.authentication.isAuthenticated);
  const validInput = useSelector((state) => state.validate.isValidate);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(email.value.includes('@') && password.trim().length !== 0){
      dispatch(validActions.valid())
      
    }
    if(validInput){
      dispatch(authActions.login());
    }
    return;
  };



  return (
    <Fragment>
      {!show && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={onSubmitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input onChange={emailChangeHandler} type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input onChange={passwordChangeHandler} type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
      {show && <UserProfile></UserProfile>}
    </Fragment>
  );
};

export default Auth;
