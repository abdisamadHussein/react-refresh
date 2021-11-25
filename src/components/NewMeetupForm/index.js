import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

const Control = styled.div` 
  margin-bottom: 0.5rem;
  label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    input, textarea {
      display: block;
        font: inherit;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 0.25rem;
        width: 100%;
    }
   
}
`;

const Action = styled.div`
  margin-top: 1rem;
  text-align: right;
  button {
      font: inherit;
      cursor: pointer;
      background-color: #77002e;
      color: white;
      padding: 0.5rem 1.5rem;
      border: 1px solid #77002e;
      border-radius: 4px;
      font-weight: bold;
      &:hover ,&:active {
        background-color: #a50e48;
          border-color: #a50e48;
    }

`;

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const Index = ({ onAddMeetup }) => {
  const formik = useFormik({
    initialValues: {
      meetupTitle: "",
      meetupImage: "",
      address: "",
      description: "",
    },

    onSubmit: (values) => {
      onAddMeetup(values);
    },
  });
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <Control>
          <label htmlFor="MeetupTitle">Meetup Title</label>
          <input
            id="MeetupTitle"
            name="meetupTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.meetupTitle}
          />
        </Control>
        <Control>
          <label htmlFor="MeetupImage">MeetUp Image </label>
          <input
            id="MeetupImage"
            name="meetupImage"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.meetupImage}
          />
        </Control>
        <Control>
          <label htmlFor="Address">Address </label>
          <input
            id="Address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </Control>

        <Control>
          <label htmlFor="Description">Description </label>
          <textarea
            id="Description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Control>
        <Action>
          <button type="submit">Add Meetup</button>
        </Action>
      </form>
    </Card>
  );
};

export default Index;
// component={MyInput}
