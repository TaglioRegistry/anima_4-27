import React from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../components/FormBox";
import { RedButton } from "../../components/RedButton";
import "./style.css";

export const CardRequestPage = (): JSX.Element => {
  return (
    <div className="card-request-page">
      <div className="div-6">
        <div className="frame-91">
          <div className="frame-92">
            <div className="overlap-group-17">
              <div className="frame-93">
                <div className="auto-layout-32">
                  <input className="search-3" />
                  <img className="frame-94" alt="Frame" src="/img/frame-2.svg" />
                </div>
                <img className="auto-layout-33" alt="Auto layout" src="/img/auto-layout-horizontal-7.svg" />
              </div>
              <img className="frame-95" alt="Frame" src="/img/frame-9.svg" />
              <Link to="/user-home-page">
                <img className="image-6" alt="Image" src="/img/image-1.png" />
              </Link>
            </div>
            <Link to="/user-profile">
              <img className="frame-96" alt="Frame" src="/img/frame-39.svg" />
            </Link>
          </div>
        </div>
        <div className="frame-97">
          <div className="frame-98">
            <div className="rectangle-10" />
            <div className="text-wrapper-42">Organizations</div>
            <img className="frame-99" alt="Frame" src="/img/frame-3.svg" />
          </div>
          <div className="frame-100">
            <div className="rectangle-10" />
            <div className="text-wrapper-42">Show more...</div>
          </div>
          <Link className="frame-101" to="/organization-page">
            <img className="frame-102" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-34">
              <div className="text-wrapper-43">0</div>
            </div>
            <div className="text-wrapper-44">Organization 1</div>
          </Link>
          <div className="frame-103">
            <img className="frame-102" alt="Frame" src="/img/frame-4-3.svg" />
            <div className="auto-layout-34">
              <div className="text-wrapper-43">0</div>
            </div>
            <div className="text-wrapper-44">Organization 2</div>
          </div>
          <div className="frame-104">
            <div className="overlap-group-18">
              <div className="frame-105">
                <div className="rectangle-11" />
              </div>
              <img className="frame-102" alt="Frame" src="/img/frame-3.svg" />
              <div className="text-wrapper-42">Settings</div>
            </div>
          </div>
          <div className="auto-layout-35">
            <div className="text-wrapper-45">Search</div>
            <img className="frame-106" alt="Frame" src="/img/frame-45.svg" />
          </div>
        </div>
        <div className="frame-107">
          <div className="text-wrapper-46">Create new entry</div>
          <div className="text-wrapper-47">Enter Format Information</div>
          <FormBox className="form-box-instance" />
          <FormBox className="design-component-instance-node" text="Format Code" />
          <FormBox className="frame-108" text="Facility Code" />
          <FormBox className="frame-109" text="Card Start Number" />
          <RedButton className="red-button-3" divClassName="red-button-2" text="Submit" />
        </div>
        <div className="frame-110">
          <div className="frame-111">
            <div className="overlap-group-19">
              <div className="element-taglio-LLC-5">© 2024 Taglio® LLC</div>
              <div className="element-taglio-LLC-5">© 2024 Taglio® LLC</div>
            </div>
            <Link className="text-wrapper-48" to="/help-page">
              User Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
