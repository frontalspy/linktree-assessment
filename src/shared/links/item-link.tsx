import React from "react";
import { UserPreferences } from "../../user/user";
import style from "./item-link.scss";

interface LinksProps {
  text: string;
  preferences?: UserPreferences;
  callback?: () => void;
  to?: string;
}
export const LinkItem: React.FC<LinksProps> = ({
  to,
  text,
  callback,
  preferences = {
    backgroundColor: "green",
    color: "black",
  },
}) => {
  const userStyle = {
    backgroundColor: preferences.backgroundColor,
    color: preferences.color,
  };
  return (
    <div className="link">
      <style jsx>{style}</style>
      {callback ? (
        <button className="link-action" onClick={callback} style={userStyle}>
          {text}
        </button>
      ) : (
        <a
          className="link-action"
          href={to}
          rel="noopener nofollow"
          target="_blank"
          style={userStyle}
        >
          {text}
        </a>
      )}
    </div>
  );
};
