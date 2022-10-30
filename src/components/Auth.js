import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store";
import { Fragment } from "react";
import UserProfile from "./UserProfile";

const Auth = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.isAuthenticated);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <Fragment>
      {!show && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={onSubmitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={onSubmitHandler}>Login</button>
            </form>
          </section>
        </main>
      )}
      {show && <UserProfile></UserProfile>}
    </Fragment>
  );
};

export default Auth;
