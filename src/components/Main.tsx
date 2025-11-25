import type React from "react";

import { useContext, useEffect, useState, useRef } from "react";
import GalleryScreen from "./gallery/gallery-screen";
import IconTray from "./IconTray";
import "./Main.css";
export const Main: React.FC = (): React.ReactElement => {
  const [displayContact, setDisplayContact] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // initial show after 4s, then toggle every 4s
    const initial = window.setTimeout(() => {
      setDisplayContact(true);
      intervalRef.current = window.setInterval(() => {
        setDisplayContact((prev) => !prev);
      }, 4000);
    }, 4000);

    return () => {
      clearTimeout(initial);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleManualToggleOverride = (displayContact: boolean) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
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

        <div className="fade-wrapper" style={{ position: "relative" }}>
          <div className={`fade-text ${displayContact ? "visible" : ""}`}>
            <span>petri.nykaenen@gmail.com</span>
            <br />
            <span>+358 50 5355 193</span>
            <br />
            <br />
            <br />
          </div>

          <div className={`fade-text ${!displayContact ? "visible" : ""}`}>
            <span>Web Development</span>
            <br />
            <span>Front End</span>
            <br />
            <span>JavaScript / TypeScript</span>
            <br />
            <span>React</span>
          </div>
        </div>
        <div style={{ fontSize: "50px" }}>
          <span
            onClick={() => setDisplayContact((prev) => !prev)}
            className="no-caret"
            style={
              displayContact
                ? { color: "gray", caretColor: "transparent" }
                : { color: "white", caretColor: "transparent" }
            }
          >
            •
          </span>
          <span
            onClick={() => setDisplayContact((prev) => !prev)}
            className="no-caret"
            style={
              displayContact
                ? { color: "white", caretColor: "transparent" }
                : { color: "gray", caretColor: "transparent" }
            }
          >
            •
          </span>
        </div>
      </div>
      <div id="content-icons">
        {" "}
        <IconTray />
      </div>
    </div>
  );
};
