import React, { useState } from "react";
import { PasswordSettings } from "./PasswordSettings";
import { PersonalDetailsSettings } from "./PersonalDetailsSettings";
import { BsCardImage } from "react-icons/bs";
import { IntegrationSettings } from "./IntegrationSettings";

export const SettingsSideBar = () => {
  const [, setImage] = useState("");
  const [file, setFile] = useState();

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
        style={{ marginRight: "40px" }}
      >
        <a
          className="nav-link active"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Profile
        </a>
        <a
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Password
        </a>
        <a
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          App Settings
        </a>
        <a
          className="nav-link"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Integrations
        </a>
      </div>
      <div
        className="tab-content"
        id="v-pills-tabContent"
        style={{ width: "70%" }}
      >
        <div
          className="tab-pane fade"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <h3>Integrations</h3>
          <IntegrationSettings />
        </div>
        <div
          className="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <PersonalDetailsSettings />
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
        >
          <PasswordSettings />
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
        >
          <h4>App Settings</h4>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "49%" }}>
              <div className="form-group my-3" style={{ width: "100%" }}>
                <label for="color">Company Name</label>
                <input
                  style={{ height: "50px" }}
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  placeholder="name"
                />
                <label for="email">Support Email</label>
                <input
                  style={{ height: "50px" }}
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="support@ecommerce.com"
                />
                <label for="phone">Support Line</label>
                <input
                  style={{ height: "50px" }}
                  type="text"
                  className="form-control mb-3"
                  id="phone"
                  placeholder="+23413243536"
                />
              </div>
              <div className="form-group my-3" style={{ width: "100%" }}>
                <label for="color">Brand Color</label>
                <input
                  style={{ height: "50px" }}
                  type="color"
                  className="form-control mb-3"
                  id="color"
                  placeholder="Color"
                />
                <label for="logo">Logo</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files?.[0]);
                    setFile(URL.createObjectURL(e.target.files?.[0]));
                    // handleUpdateLogo(e);
                  }}
                />
              </div>
            </div>
            <div className="" style={{ width: "48%" }}>
              {file ? (
                <div className="card" style={{ borderRadius: "10px" }}>
                  <img
                    src={file}
                    // height="100%"
                    width="100%"
                    alt="Company Logo"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              ) : (
                <div>
                  <BsCardImage size={"100%"} color="#d4d4d4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
