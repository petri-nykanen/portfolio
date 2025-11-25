import React from "react";

const IconTray = () => {
  const imageUrl = "https://petri-nykanen.github.io/portfolio/images/";
  const socialMedia = {
    images: ["facebook.png", "instagram.png", "github", "linkedin.png"],
    links: [
      "https://www.facebook.com/petri.nykanen.33",
      "https://www.instagram.com/petri.nykaenen/?hl=fi",
      "https://github.com/petri-nykanen",
      "https://www.linkedin.com/in/petri-nyk%C3%A4nen-5454822b1/",
    ],
  };

  return (
    <div id="ikonit">
      {socialMedia.images.map((image, index) => (
        <p className={`ta${index + 1}`} key={index}>
          <a
            href={socialMedia.links[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`ta${index + 1}`}
              alt=""
              src={`${imageUrl}${image}`}
            />
            <br />
          </a>
          {image.split(".")[0].charAt(0).toUpperCase() +
            image.split(".")[0].slice(1)}
        </p>
      ))}
    </div>
  );
};

export default IconTray;
