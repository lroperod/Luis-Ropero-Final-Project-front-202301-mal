import React from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { createNewTravelAsync } from '../travel-slice';
import { TravelFormContainer } from './TravelFormStyled';

export const TravelForm = () => {
  const dispatch = useAppDispatch();

  return (
    <TravelFormContainer
      data-testid="travel-form"
      onSubmit={e => {
        e.preventDefault();
        dispatch(createNewTravelAsync(e.currentTarget));
      }}
    >
      <label htmlFor="userName">Name</label>
      <input
        type="userName"
        placeholder="Name"
        name="userName"
        id="userName"
        required
      />
      <label htmlFor="continent">Continent</label>
      <select name="continent" id="continent" required>
        <option>Select your continent</option>
        <option value="Asia">Asia</option>
        <option value="Africa">África</option>
        <option value="America">América</option>
      </select>
      <fieldset>
        <legend>
          Are you staying in a rural area from more than two weeks?:
        </legend>
        <div>
          <input
            type="radio"
            id="yes"
            name="stayingRuralArea"
            value="true"
            defaultChecked
          ></input>
          <label htmlFor="yes">Yes</label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="stayingRuralArea"
            value="false"
          ></input>
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Do you suffer from any chronic respiratory disease?:</legend>
        <div>
          <input
            type="radio"
            id="yes"
            name="chronicRespiratoryDisease"
            value="true"
            defaultChecked
          ></input>
          <label htmlFor="yes">Yes</label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="chronicRespiratoryDisease"
            value="false"
          ></input>
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>
          Are you pregnant or do you intend to become pregnant in the next three
          months after your trip?:
        </legend>
        <div>
          <input
            type="radio"
            id="yes"
            name="intentionHaveChildren"
            value="true"
            defaultChecked
          ></input>
          <label htmlFor="yes">Yes</label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="intentionHaveChildren"
            value="false"
          ></input>
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Do you have an allergy to egg or chicken protein:</legend>
        <div>
          <input
            type="radio"
            id="yes"
            name="eggOrChickenProteinAllergy"
            value="true"
            defaultChecked
          ></input>
          <label htmlFor="yes">Yes</label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="eggOrChickenProteinAllergy"
            value="false"
          ></input>
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
      <label htmlFor="travelImage">Upload your trip photo:</label>
      <input
        type="file"
        accept="image/*"
        placeholder="imageURL"
        name="travelUpload"
        id="travelImage"
      />
      <button type="submit">Create travel</button>
    </TravelFormContainer>
  );
};
export default TravelForm;
