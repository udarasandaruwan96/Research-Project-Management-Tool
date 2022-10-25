import React from "react";
import "./shv_header.css";
import "./bootstrap.min.css";
const Header = () => {
  return (
        <header>
          <div class="header">
            <div class="container">
              <div class="row">
                <div class=" logo_section">
                  <div class="full">
                    <div class="center-desk">
                      <div class="logo">
                        {" "}
                        <a href="/">
                          {" "}
                          <img
                            src="assets/images/SLIIT.png"
                            alt="Second slide"
                          />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                  <div class="menu-area">
                    <div class="limit-box">
                      <nav class="main-menu">
                      <div class="btn-group">
                        <button type="button" class="btn btn-primary">Login</button>
                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="login">Student</a>
                            <a class="dropdown-item" href="supervisorlogin">Supervisor</a>
                            <a class="dropdown-item" href="penalmemberlogin">Panel Member</a>
                            <a class="dropdown-item" href="login">Admin</a>
                        </div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href = "/"><button type="button" class="btn btn-primary">Logout</button></a>

                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  );
};

export default Header;
