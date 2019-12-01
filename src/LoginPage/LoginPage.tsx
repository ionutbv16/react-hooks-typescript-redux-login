import React, { Fragment, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../actions';
import { Navigation } from '../components/navigation/Navigation';
import { alertConstants } from '../constants';

import styled from 'styled-components';
import { any } from 'prop-types';

const SmallTitle = styled('div')`
  font-weight: normal;
  padding-left: 5px;
  text-transform: uppercase;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.125em;
  -webkit-font-smoothing: antialiased;
  padding-top: 50px;
  width: 350px;
  max-width: 556px;
  margin: 15px 0px;
`;

const Content = styled('div')`
  width: 350px;
  max-width: 556px;
  text-align: center;
  position: relative;
  padding: 15px;
  background: white;
  margin: 5px;
`;

const LoginForm__Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginForm__Content = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
`;

const TextInput__Wrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: visible;
`;

const placeholderColor = '#dddddd';
const TextInput__Input = styled('input')`
  position: relative;
  width: 100%;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
  text-transform: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(220, 220, 220);
  border-image: initial;
  padding: 10px 15px;
  outline: none;
  &::-webkit-input-placeholder {
    color: ${placeholderColor};
    letter-spacing: 3px;
  }
`;

const StyledForm = styled('form')`
  & ${TextInput__Input}:invalid {
    border-color: ${(props: any) => {
      return props.errorForm ? 'red' : 'none';
    }};
  }
`;

const Spacing = styled('div')`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
`;

const HasError = styled('div')`
  color: red;
`;

const Footer = styled('div')`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

const Button = styled('button')`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  color: black;
  width: 100%;
  outline: none;
  text-decoration: none;
  transition: all 250ms ease-in-out 0s;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 15px 0px;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const loggingIn = useSelector((state: any) => state.authentication.loggingIn);
  const loggedInFailed = useSelector(
    (state: any) => state.authentication.loggedInFailed,
  );

  const handleChange = (event: any) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const callhandleSubmit = (username: String, password: String) => {
    userActions.login(username, password).then(result => {
      dispatch(result);
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setSubmitted(true);
    if (inputs.username && inputs.password) {
      callhandleSubmit(inputs.username, inputs.password);
    } else {
      setErrorForm(true);
    }
  };

  return (
    <Fragment>
      <Navigation />

      <SmallTitle>Login</SmallTitle>
      <Content>
        <LoginForm__Wrapper>
          <LoginForm__Content>
            <StyledForm noValidate errorForm={errorForm} name="form">
              <TextInput__Wrapper>
                <TextInput__Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  required
                />
                {submitted && !inputs.username && (
                  <HasError>Username is required</HasError>
                )}
              </TextInput__Wrapper>
              <Spacing>
                <TextInput__Wrapper>
                  <TextInput__Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    placeholder="PASSWORD"
                    required
                  />
                  {submitted && !inputs.password && (
                    <HasError>Password is required</HasError>
                  )}
                </TextInput__Wrapper>
              </Spacing>
              <Footer>
                <Button onClick={handleSubmit}>Login</Button>

                {loggingIn && <p>Logging In ...</p>}
              </Footer>

              {loggedInFailed && <HasError>{alertConstants.FAILED}</HasError>}
            </StyledForm>
          </LoginForm__Content>
        </LoginForm__Wrapper>
      </Content>
    </Fragment>
  );
};
