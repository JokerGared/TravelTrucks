import { Link } from "react-router-dom";
import s from "./HomePage.module.css";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <div className={s.heroWrapper}>
      <Container>
        <h1 className={s.heroTitle}>Campers of your dreams</h1>
        <p className={s.heroText}>
          You can find everything you want in our catalog
        </p>
        <Link to="/campers" className={s.heroButton}>
          View Now
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;
