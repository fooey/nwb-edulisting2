import React from 'react';

import certificate48 from "../../img/logo/certificate48.png";

export default () => (
    <div className="container">
        <nav className="navbar navbar-static-top">
            <a className="navbar-brand" href="#">
                <img id="brand-logo" src={certificate48} />
                EduListing.com
            </a>
            <form className="form-inline pull-xs-right">
                <input className="form-control" type="text" placeHolder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="nav navbar-nav pull-right">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
);
