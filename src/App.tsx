import React from "react";
import { Profile } from "./profile/profile";
import style from "./App.scss";
import "./shared/styles/normalize.css";

export const App = () => {
  return (
    <main>
      <style jsx>{style}</style>
      <Profile />
    </main>
  );
};
