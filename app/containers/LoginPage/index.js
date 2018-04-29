/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {compose} from 'redux';
import SplashVideo from 'images/typing.mp4';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const borderWidth = '2em';

const LoginWrapper = styled.div`
  height : 100vh;
  width : 100vw;
  margin: 0;
  color: #FFF;
  background: #16A95C;
  display: flex;
  border: ${borderWidth} #3B3B3B solid;
  flex-direction: column;
`;

const SplashContainer = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  opacity: 0.15;
  transform: translate(-50%, -50%);
`;
// <video
//   src="#defer-loading"
//   poster="nice-default.jpg
//   autoplay
// />
const LoginContent = styled.div`
  height : 100%;
  width : 100%;
  margin: 0;
  color: #FFF;
  padding: ${borderWidth};
  z-index: 2;

  // Flex
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
`;

const GetStartedButton = styled(Link)`
  padding: 1em 1.5em;
  width: 250px;
  text-align: center;
  text-decoration: none;
  background: #FEFEFE;
  color: #333;
  font-weight: bold;
  border-radius: 999px;
`;

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoginWrapper>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="A Mark. application homepage" />
        </Helmet>
        <LoginContent>
          <div>
            <h1>Mark.</h1>
            A markdown editor for non-nerdy people (finally!)
          </div>

          <GetStartedButton to="/editor">Get started</GetStartedButton>
        </LoginContent>

        <SplashContainer src={`${SplashVideo}#defer-loading`} autoPlay loop />
      </LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default compose()(LoginPage);
