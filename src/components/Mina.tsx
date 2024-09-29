import React from "react";

export const Mina: React.FC = (): React.ReactElement => {
	const pvm = new Date();
	const bDay = new Date(1993, 9, 27);

	return (
		<>
			<div id="content">
				<div id="col" style={{ textShadow: "1.5px 1.5px 1.5px black" }}>
					<h2 className="t1">Kuka olen?</h2>
					<p className="t1">
						Nimeni Petri Nykänen ja asun tällä hetkellä Mikkelissä.
					</p>
					<h2 className="t2">Työhistoria</h2>
					<p className="t2">
						Olen vastikään valmistunut tietojenkäsittelyn tradenomiksi. Tätä
						ennen olen työskennellyt{" "}
						<a style={{ color: "cyan" }} href="https://www.essote.fi/">
							Eloisalla
						</a>{" "}
						sairaala-apteekissa lähettinä, jossa työskentelen myös tällä
						hetkellä. Samassa organisaatiossa olen toiminut aikaisemmin
						potilasasiakirjakeskuksessa arkistotyöntekijänä.
					</p>
					<h2 className="t3">Koulutus</h2>
					<p className="t3">
						Etelä-Savon Ammattikoulu (Esedu), taloushallinto 2009-2012
						Kaakkois-Suomen Ammattikorkeakoulu (Xamk), tietojenkäsittelyn
						tradenomi 2020-2024
					</p>
					<h2 className="t4">Yhteystiedot</h2>

					<p className="t4">
						Minulle voi soittaa, lähettää viestiä tai sähköpostia.
						<br />
						Puhelin: +358505355193
						<br />
						Sähköposti: petri.nykaenen@gmail.com
						<br />
					</p>
				</div>
				<img
					style={{ float: "left" }}
					width="30%"
					src="https://petri-nykanen.github.io/portfolio/images/mina.png"
				/>
			</div>
		</>
	);
};
