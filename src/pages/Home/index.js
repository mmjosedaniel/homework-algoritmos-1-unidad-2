import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
    <Fragment>
      <ul>
        <li>
          <Link to="exercise-1">Exercise 1</Link>
        </li>

        <li>
          <Link to="exercise-2">Exercise 2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;