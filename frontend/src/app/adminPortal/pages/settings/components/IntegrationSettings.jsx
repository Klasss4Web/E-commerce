import React from "react";
import zoomLogo from "../../../assets/icons/zoom.svg";
import meetLogo from "../../../assets/icons/google-meet.svg";

export const IntegrationSettings = () => {
  return (
    <div>
     
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut diam nonumy eirmod tempor invidunt ut diam
        nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut diam nonumy
        eirmod tempor invidunt ut diam nonumy eirmod tempor invidunt ut
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          background: "lightblue",
          padding: "40px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "30px",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "0px" }}>Zoom</p>

          <img
            class="btn"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
            src={zoomLogo}
            alt="zoom Logo"
          />

          <div
            className="collapse multi-collapse"
            id="multiCollapseExample1"
            style={{ position: "absolute", top: "57%" }}
          >
            <div class="card card-body">
              <h5>API Key</h5>
              <hr />
              <input
                style={{
                  border: "1px #c4c4c4 solid",
                  borderRadius: "5px",
                  height: "40px",
                  marginBottom: "10px",
                }}
              />
              <button>Save</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: "0px" }}>Meet</p>
          <img
            class="btn"
            data-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
            src={meetLogo}
            alt="meet Logo"
          />
          <div
            className="collapse multi-collapse"
            id="multiCollapseExample2"
            style={{
              position: "absolute",
              top: "57%",
              // bottom: 0,
              left: "55%",
            }}
          >
            <div class="card card-body">
              <h5>API Key</h5>
              <hr />
              <input
                style={{
                  border: "1px #c4c4c4 solid",
                  borderRadius: "5px",
                  height: "40px",
                  marginBottom: "10px",
                }}
              />
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h4>Payments</h4>
        <select
          placeholder="Enter your API key"
          style={{
            height: "40px",
            border: "1px solid #d4d4d4",
            borderRadius: "5px",
            marginTop: "20px",
            width: "150px",
          }}
        >
          <option>Stripe</option>
          <option>Paypal</option>
          <option>PayStack</option>
          <option>FlutterWave</option>
        </select>
        <div>
          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "5px",
              border: "1px solid #c4c4c4",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          />
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};
