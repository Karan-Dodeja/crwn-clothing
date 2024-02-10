import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
