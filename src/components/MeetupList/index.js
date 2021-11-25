import React from "react";
import Meetup from "./Meetup";

const index = ({ meetups }) => (
  <>
    {meetups.map((meetup) => (
      <Meetup key={meetup.id} meetup={meetup} />
    ))}
  </>
);

export default index;
