import React from 'react'
import { PasswordSettings } from './PasswordSettings';
import { PersonalDetailsSettings } from './PersonalDetailsSettings';

export const SettingsSideBar = () => {
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
          className="nav-link"
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
          className="nav-link active"
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
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          Integrations
        </div>
        <div
          className="tab-pane fade"
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
          ...
        </div>
      </div>
    </div>
  );
}
