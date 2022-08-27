import React from "react";

export const PasswordSettings = () => {
  return (
    <div className="mt-3">
      <form>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="oldPassword">Old Password</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Old Password"
            />
          </div>

          <div className="form-group" style={{ width: "49%" }}>
            <label for="newPassword">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New Password"
            />
          </div>
        </div>
        <div
          className="my-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="phone">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="phone"
              placeholder="Confirm Password"
            />
          </div>

         
        </div>
       
        <div className="form-group" style={{ display: "flex" }}>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};
