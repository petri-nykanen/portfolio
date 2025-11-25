import React from "react";

const IconTray = () => {
  const imageUrl = "https://petri-nykanen.github.io/portfolio/images/";
  const socialMedia = {
    images: [
      "facebook.png",
      "instagram.png",
      "pngegg.png",
      "linkedin.png",
    ],
    links: [
      "https://www.facebook.com/petri.nykanen.33",
      "https://www.instagram.com/petri.nykaenen/?hl=fi",

  }

  return (
    <div id="ikonit">
      {labels.map((label, index) => {
        return (
          <p className={`ta${index + 1}`}>
            <img
              className={`ta${index + 1}`}
              alt=""
              src={`https://petri-nykanen.github.io/portfolio/images/${label}.png`}
            />
          </p>
        );
      })}
    </div>
  );
};

//   return (
//     <div id="ikonit">
// <p className="ta1">
//   <a href="https://www.facebook.com/petri.nykanen.33" target="blank">
//     <img
//       className="ta1"
//       alt=""
//       src="https://petri-nykanen.github.io/portfolio/images/facebook.png"
//     />
//     <br />
//   </a>
//   Facebook
// </p>

//       <p className="ta2">
//         <a
//           href="https://www.instagram.com/petri.nykaenen/?hl=fi"
//           target="blank"
//         >
//           <img
//             className="ta2"
//             alt=""
//             src="https://petri-nykanen.github.io/portfolio/images/instagram.png"
//           />
//           <br />
//         </a>
//         Instagram
//       </p>

//       <p className="ta3">
//         <a href="https://github.com/petri-nykanen" target="blank">
//           <img
//             className="ta2"
//             alt=""
//             src="https://petri-nykanen.github.io/portfolio/images/pngegg.png"
//           />
//           <br />
//         </a>
//         GitHub
//       </p>

//       <p className="ta4">
//         <a
//           href="https://www.linkedin.com/in/petri-nyk%C3%A4nen-5454822b1/"
//           target="blank"
//         >
//           <img
//             className="ta2"
//             alt=""
//             src="https://petri-nykanen.github.io/portfolio/images/linkedin.png"
//           />
//           <br />
//         </a>
//         LinkedIn
//       </p>
//     </div>
//   );
// };

export default IconTray;
