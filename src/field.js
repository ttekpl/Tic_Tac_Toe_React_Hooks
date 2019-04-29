import React from "react";

import "./styles.css";

function Field({ value, onClick }) {
  return (
    <div onClick={onClick} className="field">
      {value}
    </div>
  );
}

export default Field;
