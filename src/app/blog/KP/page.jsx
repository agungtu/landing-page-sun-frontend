import React from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import KPdetails from "../../../components/Blog/KPdetails";
import Faq from "../../../components/Blog/KPdetails";

export default function Page() {
  return (
    <>
      <section
        className="top-banner-area"
        // style={{ backgroundImage: `url("/images/top-banner-area-bg.jpg")` }}
      >
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-6">
                <Link href="/" className="logo">
                  PT. SUN
                </Link>
              </div>
              <div className="col-md-3 text-end">
                <Link href="/" className="nav-text">
                  Home
                </Link>
              </div>
              <div className="col-md-1 text-end">
                <Link href="/" className="nav-text">
                  About
                </Link>
              </div>
              <div className="col-md-1 text-end">
                <Link href="/" className="nav-text">
                  contact
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="banner-title mt-5">Kebijakan Privasi</h1>
            </div> */}
            {/* <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Blog Details Left Sidebar</li>
              </ol>
            </div> */}
          {/* </div> */}
        </div>
      </section>

      <Faq />

      {/* <Footer /> */}
    </>
  );
}
