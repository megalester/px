import React from "react";
import "../../app/style.css";

const Header = () => {
  return (
    <header
      className="ps-masthead presentedElement"
      role="banner"
      data-cid="tcm:84-224274-16"
      data-ctid="tcm:91-223647-32"
    >
      <div className="ps-masthead-wrapper">
        <div className="new_logoOuter">
          <div className="ps-logo-home">
            <img src="/images/wf-logo.webp" alt="Wellsfargo" />
          </div>
        </div>
        <nav className="ps-right-nav" aria-label="Header Navigation">
          <ul>
            <li>
              <a href="#">ATMs/Locations</a>
            </li>
            <li>
              <a
                href="#"
                className="ps-masthead-help"
                role="button"
                aria-expanded="false"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                xmlLang="es"
                id="langPrefToggle"
                className="spTogglePersonal"
                name="langPrefToggle"
                lang="es"
              >
                Español
              </a>
            </li>
            <li className="ps-search-item">
              <a
                href="#"
                className="ps-nxgSearchIcon"
                id="nxgSearchButton"
                aria-label="Search, Opens a dialog."
              >
                &nbsp;&nbsp;
              </a>
            </li>
            <li className="ps-sign-on-item">
              <div className="ps-masthead-sign-on">
                <a
                  href="#"
                  className="ps-sign-on-text"
                  data-platform="applicationhost"
                  data-host="Login App Host"
                >
                  Sign On
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          data-role="none"
          className="ps-hamburger-link sf-hidden"
          name="hamburger-link"
          data-effect="st-effect-1"
          aria-expanded="false"
          aria-label="Open Menu Navigation"
        ></button>
      </div>
    </header>
  );
};

export default Header;
