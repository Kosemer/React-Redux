import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store/authentication';

const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.authentication.isAuthenticated);

  const loguot = () => {
    dispatch(authActions.loguot());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {show &&<nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={loguot}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
