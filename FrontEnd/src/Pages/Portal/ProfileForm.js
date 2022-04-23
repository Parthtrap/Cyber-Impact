import "./ProfileForm.css";
import { useRef, useState } from "react";

const ProfileForm = () => {
  const businessNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const addressInputRef = useRef();
  const openingTimeInputRef = useRef();
  const closingTimeInputRef = useRef();
  const professionInputRef = useRef();

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
  };

  const [ProfessionArray, setProfessionArray] = useState(
    categoryStorage.Professions["No Category"]
  );
  const [selectedCategory, setSelectedCategory] = useState("No Category");
  const [selectedProfession, setSelectedProfession] = useState("No Profession");

  const categorySelect = (e) => {
    setProfessionArray(categoryStorage.Professions[e.target.value]);
    setSelectedCategory(e.target.value);
    setSelectedProfession(categoryStorage.Professions[e.target.value][0]);
  };

  const professionChange = (e) => {
    setSelectedProfession(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const BusinessName = businessNameInputRef.current.value;
    const PhoneNumber = phoneNumberInputRef.current.value;
    const Address = addressInputRef.current.value;
    const OpeningTime = openingTimeInputRef.current.value;
    const ClosingTime = closingTimeInputRef.current.value;
    const Profession = professionInputRef.current.value;
    console.log(
      BusinessName,
      PhoneNumber,
      Address,
      OpeningTime,
      ClosingTime,
      Profession
    );
  };

  return (
    <div className="profile-creator-body">
      <div className="profile-creator-maini-display-place-thingy">
        <div className="profile-creator-body-title">Create New Profile</div>
        <form method="post">
          <div class="profile-creator-txt-field">
            <input type="text" ref={businessNameInputRef} required />
            <span></span>
            <label>Enter Buisness Name</label>
          </div>

          <div class="profile-creator-txt-field">
            <input type="number" ref={phoneNumberInputRef} required />
            <span></span>
            <label>Enter Phone Number</label>
          </div>

          <div class="profile-creator-txt-field">
            <input type="text" ref={addressInputRef} required />
            <span></span>
            <label>Enter Buisness Address</label>
          </div>

          <button
            id="profile-creator-location-button"
            className="profile-creator-location-button"
          >
            Choose Location
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="profile-creator-time-field">
            <input type="time" ref={openingTimeInputRef} required />
            <span></span>
            <label>Enter Opening Time</label>
          </div>

          <div class="profile-creator-time-field">
            <input type="time" ref={closingTimeInputRef} required />
            <span></span>
            <label>Enter Closing Time</label>
          </div>

          <select
            name="category-select-form"
            className="selection-form category-select-form"
            id="category-select-form"
            onChange={categorySelect}
          >
            {categoryStorage.Categories.map((e) => {
              return (
                <option className="category-items" value={e}>
                  {e}
                </option>
              );
            })}
          </select>

          <select
            name="profession-select-form"
            className="selection-form profession-select-form"
            id="profession-select-form"
            onChange={professionChange}
            ref={professionInputRef}
          >
            {ProfessionArray.map((e) => {
              return (
                <option className="category-items" value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <br />
          <div className="new-profile-submit-div">
            <button
              type="submit"
              className="new-profile-save-button"
              onClick={submitHandler}
            >
              Save{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;