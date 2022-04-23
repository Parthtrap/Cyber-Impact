import { useRef, useState, useEffect } from "react";
import "./FrontPage.css";
import ProfileCards from "../../Components/ProfileCards";

const FrontPage = () => {
  const [markets, setMarkets] = useState([]);

  //   useEffect(() => {
  // const searchQuery = JSON.stringify({
  //   profession: null,
  //   filter: "Rating",
  // });

  //     console.log(searchQuery);

  // fetch("http://localhost:5000/api/market/filter", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: searchQuery,
  // }).then((response, err) => {
  //       if (response.status === 201) {
  //         response.json().then((data) => {
  //           console.log(data);
  //           setMarkets(data.filteredMarkets);
  //           return;
  //         });
  //       } else {
  //         console.log(err);
  //         return;
  //       }
  //     });
  //   });
  useEffect(() => {
    const fetchMarket = async () => {
      const searchQuery = JSON.stringify({
        profession: null,
        filter: "Rating",
      });
      try {
        const response = await fetch(
          "http://localhost:5000/api/market/filter",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: searchQuery,
          }
        );

        const responseData = await response.json();

        if (response.status === 201) {
          console.log(responseData);
          setMarkets(responseData.filteredMarkets);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMarket();
  }, []);

  //   const data = {
  //     BusinessID: "rklncyi2o8r2uncor4",
  //     BusinessName: "Parthtrap Tailors",
  //     PhoneNumber: "94738563824",
  //     OwnerID: "3jh52n5iu4fsgev",
  //     Address: "Agra, UP",
  //     latitude: 35.4345453,
  //     longitude: 34.5675856,
  //     Rating: 4.5,
  //     Reviews: [
  //       {
  //         RaterID: "hu34brku3hrbku4",
  //         Rating: 5,
  //         Review: "Dope AF",
  //       },
  //       {
  //         RaterID: "ergiueyivu3tnv",
  //         Rating: 4,
  //         Review: "Meh",
  //       },
  //     ],
  //     OpeningTime: "3PM",
  //     ClosingTime: "9PM",
  //     Profession: "tailor",
  //     ImageURL: "dgferf.in/fgrcwfwf/wfcwfw",
  //   };

  let categoryStorage = {
    Categories: [
      "No Category",
      "Clothes",
      "Food",
      "Education",
      "Electrical",
      "Medical",
      "Services",
    ],
    Professions: {
      "No Category": ["No Professions"],
      Clothes: ["Dextor", "Clothes Shop", "Tailor"],
      Food: ["Grocerries", "Restraunt"],
      Electrical: [
        "Appliances",
        "Mobiles",
        "Laptops",
        "Accessories",
        "Electric repair",
      ],
      Education: ["Stationary", "Book Store", "Libraries"],
      Medical: ["Clinics", "Medical"],
      Services: [
        "Train reservations",
        "Flight reservations",
        "Property Management",
        "Architect",
        "Labor",
      ],
    },
    Filter: ["Rating", "Distance"],
  };

  const hiddenIconStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "12px",
    cursor: "pointer",
    visibility: "hidden",
  };
  const vissibleIconStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "12px",
    cursor: "pointer",
  };

  const [ProfessionArray, setProfessionArray] = useState(
    categoryStorage.Professions["No Category"]
  );
  const [selectedCategory, setSelectedCategory] = useState("No Category");
  const [selectedProfession, setSelectedProfession] =
    useState("No Professions");
  const [selectedFilter, setSelectedFilter] = useState("Rating");
  const [filterStyle, setFilterStyle] = useState(
    "user-frontpage-filtering-bar"
  );
  const [searchStyle, setSearchStyle] = useState(
    "user-frontpage-filtering-bar-hidden"
  );
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

  const filterButtonPressed = async () => {
    console.log(selectedCategory, selectedProfession, selectedFilter);

    const profession =
      selectedProfession === "No Professions" ? null : selectedProfession;
    const filter = selectedFilter;

    if (filter === "Distance") {
      alert("This method doesn't work right now");
      return;
    }

    try {
      const searchQuery = JSON.stringify({
        profession: profession,
        filter: filter,
      });

      console.log(searchQuery);

      const response = await fetch("http://localhost:5000/api/market/filter", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: searchQuery,
      });

      const responseData = await response.json();
      if (response.status === 201) {
        console.log(responseData);
        setMarkets(responseData.filteredMarkets);
      } else {
        console.log(responseData.error);
      }
    } catch (err) {
      console.log(err);
      return;
    }
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
          <select
            name="front-page-category-select"
            className="front-page-selection front-page-category-select"
            id="front-page-category-select"
            onChange={categorySelect}
          >
            {categoryStorage.Categories.map((e) => {
              return (
                <option className="front-page-category-items" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <select
            name="front-page-profession-select"
            className="front-page-selection front-page-profession-select"
            id="front-page-profession-select"
            onChange={professionChange}
          >
            {ProfessionArray.map((e) => {
              return (
                <option className="front-page-category-items" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <select
            name="front-page-filter-select"
            className="front-page-selection front-page-filter-select"
            id="front-page-filter-select"
            onChange={filterChange}
          >
            {categoryStorage.Filter.map((e) => {
              return (
                <option className="front-page-category-items" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <button
            id="front-page-filter-button"
            className="front-page-filter-button"
            onClick={filterButtonPressed}
          >
            Filter
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <button
            id="front-page-filter-button"
            className="front-page-filter-button"
            onClick={searchFilterToggleButton}
          >
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
            <input
              className="front-page-search-edit-text"
              id="front-page-search-edit-text"
              placeholder="Search"
              type="text"
              onChange={searchBarChange}
              value={searchBarText}
            />
          </div>

          <button
            id="front-page-filter-button"
            className="front-page-filter-button"
            onClick={SearchButtonPressed}
          >
            Search
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            id="front-page-filter-button"
            className="front-page-filter-button"
            onClick={searchFilterToggleButton}
          >
            Filter
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="frontpage-filtered-list-display">
        {markets.map((market) => {
          const data = {
            BusinessID: market._id,
            BusinessName: market.title,
            PhoneNumber: market.phonenum,
            OwnerID: market.ownerId,
            Address: market.address,
            latitude: market.location.lat,
            longitude: market.location.lng,
            Rating: market.rating,
            Reviews: market.reviews.map((review) => {
              return {
                RaterID: review.raterID,
                Rating: review.rating,
                Review: review.review,
              };
            }),
            OpeningTime: market.openingTime,
            ClosingTime: market.closingTime,
            Profession: market.profession,
            ImageURL: market.imageURL,
          };

          return <ProfileCards data={data} />;
        })}
      </div>
    </div>
  );
};

export default FrontPage;
