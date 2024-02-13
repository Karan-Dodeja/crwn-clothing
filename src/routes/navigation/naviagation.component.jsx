import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>{Logo}</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
