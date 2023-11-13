import { Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import Main from "../component/Main/Main";
import Swipers from "../component/Swipers/Swipers";

const StyledBox = styled(Typography)`
  font-size: 2.3rem;
  font-weight: 500;
  margin: 0.5% 11%;
`;
<StyledBox />;
const Home = () => {
  return (
    <>
      <Main />
      <StyledBox> Selected For You</StyledBox>
      <Swipers />
      <StyledBox> You Must buy it now</StyledBox>
      <Swipers />
    </>
  );
};

export default Home;
