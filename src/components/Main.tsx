import type React from "react";
import { useContext } from "react";
import GalleryScreen from "./gallery/gallery-screen";

export const Main: React.FC = (): React.ReactElement => {
	return (
		<div id="content">
			<p className="fade" />
			<GalleryScreen />

			<div style={{ textAlign: "center" }}>
				<h2
					className="fade"
					style={{ textAlign: "center", textShadow: "1.5px 1.5px 1.5px black" }}
				>
					Software Developer
					<br />
				</h2>
				<span id="fade">Web Development</span>
				<br />
				<span id="fade">Front End</span>
				<br />
				<span id="fade">JavaScript / TypeScript</span>
				<br />
				<span id="fade">React</span>
			</div>
		</div>
	);
};
