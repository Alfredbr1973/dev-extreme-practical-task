import React from "react";
import MyGridData from "./Components/MyGridData";

function App() {
  return (
    <div className="container">
      <h3>Extreme DataGrid</h3>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10">
          <MyGridData />
        </div>
      </div>
    </div>
  );
}

export default App;
