import React from "react";
import { useState } from "react";
import App from "../App";

function AppWithUnmountCheckbox() {
  const [mountApp, setMountApp] = useState(true);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mountApp}
          onChange={(e) => setMountApp(e.target.checked)}
        />{" "}
        Mount Component
      </label>
      <hr />
      {mountApp ? <App /> : null}
    </div>
  );
}

export default AppWithUnmountCheckbox;
