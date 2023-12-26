import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Orderio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            {!isAuth ? (
              <>
                <li className="nav-item">
                  <LoginLink
                    postLoginRedirectURL="/dashboard"
                    className="nav-link"
                  >
                    Login
                  </LoginLink>
                </li>
                <li className="nav-item">
                  <RegisterLink
                    postLoginRedirectURL="/dashboard"
                    className="nav-link"
                  >
                    Sign Up
                  </RegisterLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link href="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <LogoutLink className="nav-link">Logout</LogoutLink>
                </li>
                <button className="nav-item btn btn-sm btn-primary ">
                  Create Ticket
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
