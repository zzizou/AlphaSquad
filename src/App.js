import React, { useState } from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [userValue, setUserValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const EventHandler = (event) => {
    setUserValue(event.target.value);
    console.log(event.target.value);
  };

  const updateData = (e) => {
    e.preventDefault();
    setFinalValue(userValue);
  };

  return (
    <div className="container mt-5">
      <div className="ml-3">
        <p className="lead">{finalValue}</p>
      </div>
      <div className="offset-md-2 col-md-8 mt-5">
        <form onSubmit={updateData}>
          <div className="form-group">
            <label>Write Something</label>
            <textarea
              className="form-control"
              rows="5"
              onChange={EventHandler}
              value={userValue}
            ></textarea>

            <button type="submit" className="mt-5 btn btn-primary">
              Post!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
