import React, { useState } from "react";
import ImageGallery from "./ImageGallery";

const GalleryScreen = () => {
	const [imgIndex, setImgIndex] = useState(1);

	const nextImage = () => {
		if (imgIndex > 0 && imgIndex < 5) setImgIndex(imgIndex + 1);
	};

	const previousImage = () => {
		if (imgIndex > 1 && imgIndex < 6) setImgIndex(imgIndex - 1);
	};

	const images = [
		"https://petri-nykanen.github.io/portfolio/images/1.jpg",
		"https://petri-nykanen.github.io/portfolio/images/2.jpg",
		"https://petri-nykanen.github.io/portfolio/images/3.jpg",
	];

	return (
		// <div
		// 	id="gallery"
		// 	style={{
		// 		display: "flex",
		// 		alignItems: "center",
		// 		justifyContent: "center",
		// 	}}
		// >
		// 	<i onClick={previousImage} className="fas fa-arrow-left"></i>
		// 	<img
		// 		src={`https://petri-nykanen.github.io/portfolio/images/${imgIndex}.jpg`}
		// 		alt=""
		// 	/>
		// 	<i onClick={nextImage} className="fas fa-arrow-right"></i>
		// </div>
		<>
			<ImageGallery images={images} />
		</>
	);
};

export default GalleryScreen;
