import React from "react";
import arrow from "../../../../assets/icons/arrow.svg";
import { formatDate } from "../../date.utils";
import { ShowsLinkInterface } from "../links.types";
import style from "./item-shows-link.scss";

interface ShowLinkItemProps {
  link: ShowsLinkInterface;
}
export const ShowLinkItem: React.FC<ShowLinkItemProps> = ({ link }) => {
  return (
    <div className="show">
      <style jsx>{style}</style>
      <a href={link.link} className="grid">
        <span className="content">
          <span className="date">{formatDate(link.timeDate)}</span>
          <span className="location">{link.location}</span>
        </span>
        <span className="status">
          {link.soldOut ? "Sold out" : <img src={arrow} />}
        </span>
      </a>
    </div>
  );
};
