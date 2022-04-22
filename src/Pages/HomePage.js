import React, { useEffect } from "react";
import "./HomePage.css";
import HomePageFeaturesCards from "./../Components/HomePageFeaturesCard";
import { Fade } from "react-reveal";

const HomePage = () => {
	window.addEventListener("scroll", scrollEventListener);
	var answer;
	var styles;
	function scrollEventListener() {
		const winScroll = document.querySelector(".wavebottom").getBoundingClientRect().bottom;

		const winScrollh = document.querySelector(".wavebottom").getBoundingClientRect().bottom + window.scrollY;

		answer = 1 - winScroll / winScrollh;
		styles = { transform: `translateX(${answer * 90}vw)` };
		document.getElementById("wavebottom").style.setProperty("transform", `translateX(-${answer * 90}vw)`);
		console.log(answer);
		console.log(styles);
	}

	const FeaturesArray = [
		{
			id: 1,
			text: "Description 1",
		},
		{
			id: 2,
			text: "Description 2",
		},
		{
			id: 3,
			text: "Description 3",
		},
		{
			id: 4,
			text: "Description 4",
		},
		{
			id: 5,
			text: "Description 5",
		},
		{
			id: 6,
			text: "Description 6",
		},
		{
			id: 7,
			text: "Description 7",
		},
	];
	return (
		<>
			{/* Home Page Title Div */}
			<div className="homepage-title-box">
				{/* Home Page Title */}
				<span className="homepage-title">Cyber Impact</span>
				<br />
				{/* Home Page Description */}
				<span className="homepage-subtitle">An Online Market</span>
				{/* Home Page Title Div Bottom Wave Border */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="wavebottom" id="wavebottom">
					<path
						fill="#ffffff"
						fillOpacity="1"
						d="M0,64L26.7,74.7C53.3,85,107,107,160,106.7C213.3,107,267,85,320,90.7C373.3,96,427,128,480,144C533.3,160,587,160,640,138.7C693.3,117,747,75,800,58.7C853.3,43,907,53,960,69.3C1013.3,85,1067,107,1120,128C1173.3,149,1227,171,1280,160C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
					></path>
				</svg>
			</div>

			{/* Home Page Features Area */}
			<div className="features-div">
				<div className="features-dev-title">Features</div>
				<div className="features-feature-box-container">
					{FeaturesArray.map((Featuring) => {
						if (Featuring.id % 3 == 1) {
							return (
								<Fade left>
									<HomePageFeaturesCards imgsrc="" text={Featuring.text} />
								</Fade>
							);
						} else if (Featuring.id % 3 == 2) {
							return (
								<Fade bottom>
									<HomePageFeaturesCards imgsrc="" text={Featuring.text} />
								</Fade>
							);
						} else {
							return (
								<Fade right>
									<HomePageFeaturesCards imgsrc="" text={Featuring.text} />
								</Fade>
							);
						}
					})}
				</div>
			</div>

			{/* About the Website */}
			<div className="about-website-container">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 1440 120" style={{ overflow: "hidden" }}>
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,176C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					></path>
				</svg>

				<div className="about-website-textbox">
					<h1>About Us</h1>
					<h3>We Rock</h3>
				</div>
				<br />

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,0L40,0C80,0,160,0,240,16C320,32,400,64,480,85.3C560,107,640,117,720,101.3C800,85,880,43,960,26.7C1040,11,1120,21,1200,37.3C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
					></path>
				</svg>
			</div>
		</>
	);
};
export default HomePage;
