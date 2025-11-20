import type React from "react";
import { useContext, useEffect, useState } from "react";
import GalleryScreen from "./gallery/gallery-screen";
import IconTray from "./IconTray";

export const Main: React.FC = (): React.ReactElement => {
  const [displayContact, setDisplayContact] = useState(false);

  useEffect(() => {
    autoToggle();
  }, []);

  const autoToggle = () => {
    setTimeout(() => {
      setDisplayContact(true);
    }, 4000);

    setTimeout(() => {
      setDisplayContact(false);
    }, 8000);
    setTimeout(() => {
      autoToggle();
    }, 12000);
  };

  return (
    <div id="content">
      <p className="fade" />
      <GalleryScreen />

      <div style={{ textAlign: "center" }}>
        <h2
          className="fade"
          style={{
            textAlign: "center",
            textShadow: "1.5px 1.5px 1.5px black",
            color: "white",
          }}
        >
          Software Developer
          <br />
        </h2>
        {displayContact ? (
          <div id="fade">
            <span id="fade">petri.nykaenen@gmail.com</span>
            <br />
            <span id="fade">+358 50 5355 193</span>
            <br />
            <br />
            <br />
          </div>
        ) : (
          <div id="fade">
            <span id="fade">Web Development</span>
            <br />
            <span id="fade">Front End</span>
            <br />
            <span id="fade">JavaScript / TypeScript</span>
            <br />
            <span id="fade">React</span>
          </div>
        )}
      </div>
      <div id="content-icons">
        {" "}
        <IconTray />
      </div>
    </div>
  );
};
