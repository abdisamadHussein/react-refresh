import React, { useState, useEffect } from "react";
import MeetupList from "../components/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-8834b-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetups;
