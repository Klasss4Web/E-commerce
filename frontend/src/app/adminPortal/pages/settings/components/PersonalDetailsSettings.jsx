import React from "react";

export const PersonalDetailsSettings = () => {
  return (
    <div className="mt-3">
      <form>
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s"
            }
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div className="form-group" style={{ width: "49%" }}>
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@email.com"
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
            <label for="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+2347034564774"
            />
          </div>

          <div className="form-group" style={{ width: "49%" }}>
            <label for="designation">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              placeholder="admin"
            />
          </div>
        </div>
        <div className="form-group my-4">
          <label for="exampleFormControlTextarea1">Bio</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group" style={{ display: "flex" }}>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};
