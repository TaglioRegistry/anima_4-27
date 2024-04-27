import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HelpPage = (): JSX.Element => {
  return (
    <div className="help-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="frame">
              <div className="frame-2">
                <div className="overlap-group-2">
                  <div className="element-taglio-LLC">© 2024 Taglio® LLC</div>
                  <div className="element-taglio-LLC">© 2024 Taglio® LLC</div>
                </div>
                <div className="text-wrapper">User Help</div>
              </div>
            </div>
            <div className="frame-3">
              <p className="help-page-link-to">
                Help Page/Link to User QFG
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Question?
                <br />
                <br />
                Answer
                <br />
                <br />
                Question?
                <br />
                <br />
                Answer
              </p>
              <div className="text-wrapper-2">FAQs</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="rectangle" />
              <div className="text-wrapper-3">Organizations</div>
              <img className="img" alt="Frame" src="/img/frame-3.svg" />
            </div>
            <div className="frame-6">
              <div className="rectangle" />
              <div className="text-wrapper-3">Show more...</div>
            </div>
            <Link className="frame-7" to="/organization-page">
              <img className="frame-8" alt="Frame" src="/img/frame-4-3.svg" />
              <div className="div-wrapper">
                <div className="text-wrapper-4">0</div>
              </div>
              <div className="text-wrapper-5">Organization 1</div>
            </Link>
            <div className="frame-9">
              <img className="frame-8" alt="Frame" src="/img/frame-4-3.svg" />
              <div className="div-wrapper">
                <div className="text-wrapper-4">0</div>
              </div>
              <div className="text-wrapper-5">Organization 2</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="rectangle-wrapper">
                  <div className="rectangle-2" />
                </div>
                <img className="frame-8" alt="Frame" src="/img/frame-3.svg" />
                <div className="text-wrapper-3">Settings</div>
              </div>
            </div>
            <div className="auto-layout-2">
              <div className="text-wrapper-6">Search</div>
              <img className="frame-10" alt="Frame" src="/img/frame-7.svg" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-11">
            <div className="overlap-group-4">
              <div className="frame-12">
                <div className="auto-layout-3">
                  <input className="search" />
                  <img className="frame-13" alt="Frame" src="/img/frame-2.svg" />
                </div>
                <img className="auto-layout-4" alt="Auto layout" src="/img/auto-layout-horizontal.svg" />
              </div>
              <img className="frame-14" alt="Frame" src="/img/frame-4.svg" />
              <Link to="/user-home-page">
                <img className="image" alt="Image" src="/img/image-1.png" />
              </Link>
            </div>
            <Link to="/user-profile">
              <img className="frame-15" alt="Frame" src="/img/frame-1.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
