import { useState } from "react";
import "./FrontPage.css";
import ProfileCards from "../../Components/ProfileCards";
import { useHistory } from "react-router-dom";

const FrontPage = () => {
	const navigate = useHistory();

	const data = {
		BusinessID: "rklncyi2o8r2uncor4",
		BusinessName: "Parthtrap Tailors",
		PhoneNumber: "94738563824",
		OwnerID: "3jh52n5iu4fsgev",
		Address: "Agra, UP",
		latitude: 35.4345453,
		longitude: 34.5675856,
		Rating: 4.5,
		Reviews: [
			{
				RaterID: "hu34brku3hrbku4",
				Rating: 5,
				Review: "Dope AF",
			},
			{
				RaterID: "ergiueyivu3tnv",
				Rating: 4,
				Review: "Meh",
			},
		],
		OpeningTime: "3PM",
		ClosingTime: "9PM",
		Profession: "tailor",
		ImageURL: "dgferf.in/fgrcwfwf/wfcwfw",
	};

	let categoryStorage = {
		Categories: ["No Category", "Clothes", "Food", "Education", "Electrical", "Medical", "Services"],
		Professions: {
			"No Category": ["No Professions"],
			Clothes: ["Dextor", "Clothes Shop", "Tailor"],
			Food: ["Grocerries", "Restraunt"],
			Electrical: ["Appliances", "Mobiles", "Laptops", "Accessories", "Electric repair"],
			Education: ["Stationary", "Book Store", "Libraries"],
			Medical: ["Clinics", "Medical"],
			Services: ["Train reservations", "Flight reservations", "Property Management", "Architect", "Labor"],
		},
		Filter: ["Rating", "Distance"],
	};

	const hiddenIconStyle = { position: "absolute", top: "8px", right: "8px", width: "12px", cursor: "pointer", visibility: "hidden" };
	const vissibleIconStyle = { position: "absolute", top: "8px", right: "8px", width: "12px", cursor: "pointer" };

	const [ProfessionArray, setProfessionArray] = useState(categoryStorage.Professions["No Category"]);
	const [selectedCategory, setSelectedCategory] = useState("No Category");
	const [selectedProfession, setSelectedProfession] = useState("No Profession");
	const [selectedFilter, setSelectedFilter] = useState("Rating");
	const [filterStyle, setFilterStyle] = useState("user-frontpage-filtering-bar");
	const [searchStyle, setSearchStyle] = useState("user-frontpage-filtering-bar-hidden");
	const [searchIconStyle, setSearchIconStyle] = useState(hiddenIconStyle);
	const [searchBarText, setSearchBarText] = useState("");

	const categorySelect = (e) => {
		setProfessionArray(categoryStorage.Professions[e.target.value]);
		setSelectedCategory(e.target.value);
		setSelectedProfession(categoryStorage.Professions[e.target.value][0]);
	};

	const professionChange = (e) => {
		setSelectedProfession(e.target.value);
	};

	const filterChange = (e) => {
		setSelectedFilter(e.target.value);
	};

	const filterButtonPressed = () => {
		console.log(selectedCategory, selectedProfession, selectedFilter);
	};

	const searchFilterToggleButton = () => {
		let x = filterStyle;
		setFilterStyle(searchStyle);
		setSearchStyle(x);
	};

	const searchBarChange = (e) => {
		setSearchBarText(e.target.value);
		if (e.target.value.length != 0) setSearchIconStyle(vissibleIconStyle);
		else setSearchIconStyle(hiddenIconStyle);
	};

	const clearClick = () => {
		setSearchBarText("");
		setSearchIconStyle(hiddenIconStyle);
	};

	const SearchButtonPressed = () => {
		console.log(searchBarText);
	};

	return (
		<div className="front-page-body">
			<div className="front-page-filter-search">
				<div className={filterStyle}>
					<select name="front-page-category-select" className="front-page-selection front-page-category-select" id="front-page-category-select" onChange={categorySelect}>
						{categoryStorage.Categories.map((e) => {
							return (
								<option className="front-page-category-items" value={e}>
									{e}
								</option>
							);
						})}
					</select>
					<select name="front-page-profession-select" className="front-page-selection front-page-profession-select" id="front-page-profession-select" onChange={professionChange}>
						{ProfessionArray.map((e) => {
							return (
								<option className="front-page-category-items" value={e}>
									{e}
								</option>
							);
						})}
					</select>
					<select name="front-page-filter-select" className="front-page-selection front-page-filter-select" id="front-page-filter-select" onChange={filterChange}>
						{categoryStorage.Filter.map((e) => {
							return (
								<option className="front-page-category-items" value={e}>
									{e}
								</option>
							);
						})}
					</select>
					<button id="front-page-filter-button" className="front-page-filter-button" onClick={filterButtonPressed}>
						Filter
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<button id="front-page-filter-button" className="front-page-filter-button" onClick={searchFilterToggleButton}>
						Search
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={searchStyle}>
					{/* Search Button */}
					<div className="wrapper">
						<img
							className="front-page-search-icon"
							src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
						/>
						<input className="front-page-search-edit-text" id="front-page-search-edit-text" placeholder="Search" type="text" onChange={searchBarChange} value={searchBarText} />
						<img
							src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
							style={searchIconStyle}
							onClick={clearClick}
						/>
					</div>

					<button id="front-page-filter-button" className="front-page-filter-button" onClick={SearchButtonPressed}>
						Search
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<button id="front-page-filter-button" className="front-page-filter-button" onClick={searchFilterToggleButton}>
						Filter
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
			<div className="frontpage-filtered-list-display">
				<ProfileCards data={data} onClick={() => {}} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
				<ProfileCards data={data} />
			</div>
		</div>
	);
};

export default FrontPage;
