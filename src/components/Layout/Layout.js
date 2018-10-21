import React from "react";
import Header from "../Header/Header";

export default props => {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  );
};
