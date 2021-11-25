import Navbar from "./Navbar";
import styled from "styled-components";
const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
};

export default index;
