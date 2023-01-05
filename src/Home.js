import HY from "../src/assets/hy.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Link to="/HY_Butt">
        <img width="570px" src={HY} alt="profile" />
      </Link>
      <Link to="/SteepFlankedSingleV">
        <img width="570px" src={HY} alt="profile" />
      </Link>
    </>
  );
}

export default Home;
