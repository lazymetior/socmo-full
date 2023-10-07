import React from "react";
import { Posts } from "./Posts";

export const Home = () => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <Posts />
        </div>
      </div>
    </div>
  );
};
