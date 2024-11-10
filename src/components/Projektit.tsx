import type React from "react";

export const Projektit: React.FC = (): React.ReactElement => {
	return (
		<div id="content">
			<div id="col" style={{ textShadow: "1.5px 1.5px 1.5px black" }}>
				<h2 className="fade">Tekemiäni web-projekteja</h2>
				<p className="fade">
					<a
						style={{ color: "cyan" }}
						target={"_blank"}
						href={"https://petri-nykanen.github.io/lopputyoso3/"}
					>
						Pokemon-tietokanta
					</a>{" "}
					- Käyttöliittymä, joka näyttää dataa PokéAPI:sta.
					Sovellusohjelmointikurssin lopputyö.
				</p>
				<p className="fade">
					<a
						style={{ color: "cyan" }}
						target={"_blank"}
						href={"https://petri-nykanen.github.io/csvlukija/"}
					>
						CSV-lukija
					</a>{" "}
					- Listaa syötetyt CSV-tiedostot. Tuloksia voidaan filtteröidä haulla
					tai duplikaattirivien mukaan. Toimeksianto Etelä-Savon
					hyvinvointialueelta.
				</p>
				<p className="fade">
					<a
						style={{ color: "cyan" }}
						target={"_blank"}
						href={"https://petri-nykanen.github.io/kipukasettilaskuri/"}
					>
						Kipukasettilaskuri
					</a>{" "}
					- Selainpohjainen versio Excel-taulukosta kipukasettien annosteluun.
					Toimeksianto Etelä-Savon hyvinvointialueelta.
				</p>

				<h2 className="fade">Käyttämäni tekniikat web-kehitykseen</h2>
				<p className="fade">
					<u style={{ fontSize: "125%" }}>Pääasiallinen</u>
					<br />
					JavaScript / TypeScript
					<br />
					React
					<br />
					CSS
					<br />
					HTML
					<br />
					<br />
					<u style={{ fontSize: "125%" }}>Perusteet</u>
					<br />
					MongoDB
					<br />
					SQL
					<br />
					AWS S3
					<br />
					AWS Lambda
					<br />
					Python
					<br />
					C#
					<br />
					<br />
				</p>

				<h2 className="fade">Muita taitoja </h2>
				<p className="fade">
					Adobe Photoshop
					<br />
					Adobe After Effects
					<br />
					Adobe Premiere
					<br />
				</p>

				<h2 className="fade">Harrastus- ja vapaa-ajan toiminta</h2>
				<p className="fade">
					Osallistun{" "}
					<a
						style={{ color: "cyan" }}
						target={"_blank"}
						href={"https://www.mikkelinvapaaseurakunta.fi/"}
					>
						Mikkelin Vapaaseurakunnan
					</a>{" "}
					verkkosivujen hallinnointiin sekä tuotan sisältöä organisaation{" "}
					<a
						style={{ color: "cyan" }}
						target={"_blank"}
						href={"https://www.youtube.com/@mikkelinvapaaseurakunta8900"}
					>
						YouTube-kanavalle
					</a>
					.
					<br />
				</p>
			</div>
		</div>
	);
};
