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

        <li>
          <Link to="exercise-3">Exercise 3</Link>
        </li>

        <li>
          <Link to="exercise-4">Exercise 4</Link>
        </li>

        <li>
          <Link to="exercise-5">Exercise 5</Link>
        </li>

        <li>
          <Link to="exercise-6">Exercise 6</Link>
        </li>

        <li>
          <Link to="exercise-7">Exercise 7</Link>
        </li>

        <li>
          <Link to="exercise-8">Exercise 8</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;