import React, { useContext } from "react";
import { Context } from "../../App";
import fi from "./icons/fi_icon.png";
import fiGray from "./icons/fi_icon_gray.png";
import en from "./icons/en_icon.png";
import enGray from "./icons/en_icon_gray.png";

export const Navigation: React.FC = (): React.ReactElement => {
  const { vaihda, setVaihda } = useContext(Context);

  return (
    <div id="nav">
      <ul>
        {/* 
				TODO LOCALIZATION
				<li>
					<div id="">
						<img style={{ padding: 2 }} src={fi} />
						<img id="en" style={{ padding: 2 }} src={en} />
					</div>
				</li> */}
        <li id="d">
          <i onClick={() => setVaihda("1")} className="fas fa-home"></i>
        </li>
        <li id="a">
          <i onClick={() => setVaihda("2")} className="fas fa-user"></i>
        </li>
        <li id="b">
          <i onClick={() => setVaihda("3")} className="fas fa-file"></i>
        </li>
        <li id="c">
          <i onClick={() => setVaihda("4")} className="fas fa-globe"></i>
        </li>
      </ul>
    </div>
  );
};
