import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 1px;
  font-size: 0.8rem;
  font-weight: 400;
  border-radius: 3px 3px 3px 3px;
  color: #d8000c;
  background-color: #ffbaba;
`;

let ValidationSchema = yup.object().shape({
  meetupTitle: yup.string().required("required title"),
  meetupImage: yup
    .string()
    .required("required url image")
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  address: yup.string().required("required address"),
  description: yup.string().required("required description"),
});
const Index = ({ onAddMeetup }) => {
  const formik = useFormik({
    initialValues: {
      meetupTitle: "",
      meetupImage: "",
      address: "",
      description: "",
    },
    validationSchema: ValidationSchema,

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
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
            touched={formik.touched.meetupTitle}
            value={formik.values.meetupTitle}
          />
          {formik.errors.meetupTitle && formik.touched.meetupTitle ? (
            <ErrorMessage>
              <FontAwesomeIcon
                style={{ margin: "0.5rem" }}
                icon={faTimesCircle}
              />
              {formik.errors.meetupTitle}
            </ErrorMessage>
          ) : null}
        </Control>
        <Control>
          <label htmlFor="MeetupImage">MeetUp Image </label>
          <input
            id="MeetupImage"
            name="meetupImage"
            type="url"
            onChange={formik.handleChange}
            touched={formik.touched.meetupImage}
            value={formik.values.meetupImage}
          />
          {formik.errors.meetupImage && formik.touched.meetupImage ? (
            <ErrorMessage>
              <FontAwesomeIcon
                style={{ margin: "0.5rem" }}
                icon={faTimesCircle}
              />
              {formik.errors.meetupImage}
            </ErrorMessage>
          ) : null}
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
          {formik.errors.address && formik.touched.address ? (
            <ErrorMessage>
              <FontAwesomeIcon
                style={{ margin: "0.5rem" }}
                icon={faTimesCircle}
              />
              {formik.errors.address}
            </ErrorMessage>
          ) : null}
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
          {formik.errors.description && formik.touched.description ? (
            <ErrorMessage>
              <FontAwesomeIcon
                style={{ margin: "0.5rem" }}
                icon={faTimesCircle}
              />
              {formik.errors.description}
            </ErrorMessage>
          ) : null}
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
