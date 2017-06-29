import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return(
    <div>
      <div className="outerwrap">
        <div className="wrapper">
          <h5>The World Is Your Playground</h5>
            <div className="center">
            <a href="/users/sign_up">Sign Up</a>
          </div>
        </div>
      </div>

      <div className="summary">
        <p>Gathering is the first of it’s kind pairer for
          Magic the Gathering players. Simply add
          your location and find players near you.
        </p>
      </div>
    </div>
  )
}

export default Home;
