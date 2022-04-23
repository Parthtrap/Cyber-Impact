import "./ProfileForm.css";
import { useState } from "react";

const ProfileForm = () => {
  return (
    <div className="profile-creator-body">
      <div className="profile-creator-maini-display-place-thingy">
        <div className="profile-creator-body-title">Create New Profile</div>
        <form method="post">
          <div class="profile-txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter Buisness Name</label>
          </div>

          <div class="profile-txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter Phone Number</label>
          </div>

          <div class="profile-txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter Buisness Address</label>
          </div>

          <button id="location-button" className="location-button">
            Choose Location
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="profile-txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter Opening Time</label>
          </div>

          <div class="profile-txt_field">
            <input type="text" required />
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
            <button type="submit" className="new-profile-save-button">
              Save{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
