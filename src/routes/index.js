import { Routes } from "react-router-dom";
import { Route } from "react-router";
import AllMeetups from "./../pages/AllMeetups";
import NewMeetup from "./../pages/NewMeetup";
import Favorites from "./../pages/Favorites";
import MainLayout from "../layout/MainLayout";
const index = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetup />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </MainLayout>
);

export default index;
