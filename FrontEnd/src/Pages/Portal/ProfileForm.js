import "./ProfileForm.css";
import React, { useRef, useState, useContext } from "react";
import Modal from "../../Components/ui/Modal";
import MapForm from "../../Components/shared/MapForm";
import BackDrop from "../../Components/ui/Backdrop";
import AuthContext from "../../context/auth-context";

const ProfileForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const latInputRef = useRef();
  const longInputRef = useRef();

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const BusinessName = businessNameInputRef.current.value;
    const PhoneNumber = phoneNumberInputRef.current.value;
    const Address = addressInputRef.current.value;
    const OpeningTime = openingTimeInputRef.current.value;
    const ClosingTime = closingTimeInputRef.current.value;
    const Profession = professionInputRef.current.value;
    const OwnerId = auth.userId;

    // const {title, phonenum, address, lat, lng, openingTime, closingTime, profession, ownerId} = req.body;

    const marketdata = {
      title: BusinessName,
      phonenum: PhoneNumber,
      address: Address,
      lat: latInputRef.current.value,
      lng: longInputRef.current.value,
      openingTime: OpeningTime,
      closingTime: ClosingTime,
      profession: Profession,
      ownerId: OwnerId,
    };

    try {
      const response = await fetch("http://localhost:5000/api/market/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: marketdata,
      });

      const responseData = await response.json();

      if (response.status === 201) {
        console.log(responseData);
      } else {
        console.log(responseData.error);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const useMap = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeMap = () => {
    setModalIsOpen(false);
  };

  const setCoordinates = (lat, lng) => {
    latInputRef.current.value = lat;
    longInputRef.current.value = lng;
    console.log(lat, lng);
  };
  const getInitialCoordinates = () => {
    const lat = latInputRef.current.value;
    const long = longInputRef.current.value;
    return [lat, long];
  };

  return (
    <React.Fragment>
      <Modal show={modalIsOpen} onCancel={closeMap}>
        <MapForm
          onCoordinate={setCoordinates}
          initialCoordinates={getInitialCoordinates}
        />
      </Modal>
      {modalIsOpen ? <BackDrop onCancel={closeMap} /> : null}
      <div className="profile-creator-body">
        <div className="profile-creator-main-display-place-thingy">
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
              onClick={useMap}
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
            <div>
              <input
                hidden="true"
                type="number"
                step="any"
                required
                id="lat"
                ref={latInputRef}
              />
            </div>
            <div>
              <input
                hidden="true"
                type="number"
                step="any"
                required
                id="long"
                ref={longInputRef}
              />
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
    </React.Fragment>
  );
};

export default ProfileForm;
