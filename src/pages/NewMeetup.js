import React from "react";
import NewMeetupForm from "../components/NewMeetupForm";
import { useNavigate } from "react-router-dom";
const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetup) => {
    fetch(
      "https://react-getting-started-8834b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetup),
      }
    ).then((res) => (res.ok ? navigate("/") : console.log("error")));
  };
  return (
    <div>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
