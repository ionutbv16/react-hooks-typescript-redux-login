import React, { Fragment } from 'react';
import { Navigation } from '../components/navigation/Navigation';

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="col-md-6 col-md-offset-1">
        <h1>Readme please :)</h1>
        <p>To access account, Click on Login Button on top right</p>
        <p>Login with: email@email.com / pass19</p>
        <p>
          This is a react app, login system with fake backend response and fake
          JWT Key.
        </p>
        <p>Dependencies/technologies used:</p>
        <p>
          React 16.8, Hooks, Redux, Router, Webpack, SCSS, Styled Components,
          typescript, esLint
        </p>
        <p>
          Typescript was added after the project was 90% done, so it's partialy
          implemented
        </p>
        <p>Form Validation using Styled Components and props method</p>
        <p>
          App can be started in dev environment and Build option to create
          Bundle file for Production
        </p>
        <p>
          React Hooks is replacing old React-Redux implementation with modern
          architecture:{' '}
        </p>
        <p>Local State is being manager with useState Hook </p>
        <p>
          Redux State is fetched with useSelector, no need to Wrap Component
          with connect method
        </p>
        <p>Redux Action is triggered with useDispatch </p>
        <p>Login Logic and Architecture for this App </p>
        <p>
          1. Login form triggers an Action when Username + Password is filled.{' '}
        </p>
        <p>
          2. User Service is calling fake backend and it gets the response.{' '}
        </p>
        <p>
          3. The result is being populated in Redux State by triggering an
          action creator.{' '}
        </p>
        <p>
          4. On successful login we do redirection to Account + creating a
          localStorage object with user data{' '}
        </p>
        <p>
          4. On logout we do redirection to HomePage, deleting the localStorage,
          updating Redux State
        </p>
        <p>
          Unit test with Jest + Enzyme, partially implemented cause of lack of
          time EG: src/reducers/authentication.reducer.test.js,
          src/HomePage/HomePage.test.jsx
        </p>
        <p>Only Login page was implemented cause of lack of time</p>
        <p>
          historyApiFallback: true to enable refresh on routes and prevent
          cannot GET /URL
        </p>
      </div>
    </Fragment>
  );
};
