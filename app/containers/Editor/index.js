/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import {Editor as DraftEditor} from 'draft-js';
import 'draft-js/dist/Draft.css';

import {compose} from 'redux';
import {connect} from 'react-redux';
import injectReducer from 'utils/injectReducer';

import {createStructuredSelector} from 'reselect';

import {makeSelectDocument} from './selectors';
import {changeDocument} from './actions';
import reducer from './reducer';

const EditorWrapper = styled.div`
  height : 100vh;
  width : 100vw;
  margin: 0;
  color: #FFF;
  background: #333;
  display: flex;
  padding-top: 5em;
  border: 2em #3B3B3B solid;
  border-top: 0;
  border-bottom: 0;
  flex-direction: column;
`;

const Logo = styled.h3`
  margin: 0;
  color: #FFF;
  border-bottom: 3px solid #16A95C;
`;

const EditorHeader = styled.div`
  color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  height: 3em;
  padding: 0 2em;
  width : 100vw;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background: #3B3B3B;
`;

const EditorWrapperBar = styled.div`
  height : 0.2em;
  width : 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 0;
  color: #FFF;
  background: #16A95C;
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled.button`
  padding: 0.5em 2em;
  text-align: center;
  text-decoration: none;
  background: #16A95C;
  font-weight: bold;
  font-size: 10pt;
  color: #FFF;
  border-radius: 2px;
  margin-left: auto; // position at end of row.
`;

const DocumentEditor = styled.div`
  width: calc(768px + 16px * 2);
  background: #FFF;
  margin: 0 auto;
  display: flex;
  color: #000;
  min-height: 100%;
  padding: 1em;
  flex-direction: column;
`;


export class Editor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.setEditorRef = ref => (this.editorRef = ref);
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - New Document"
          defaultTitle="Mark. - New Document"
        >
        </Helmet>

        <EditorHeader>
          <Logo>Mark.</Logo>
          <span>&nbsp;: New document</span>

          <SaveButton>Publish</SaveButton>
        </EditorHeader>

        <EditorWrapper>
          <DocumentEditor>
            <DraftEditor
              ref={this.setEditorRef}
              placeholder="Start writing..."
              editorState={this.props.document}
              onChange={this.props.onChangeDocument}
            >
              {this.props.document}
            </DraftEditor>
          </DocumentEditor>
          <EditorWrapperBar />
        </EditorWrapper>
      </div>
    );
  }
}

Editor.propTypes = {
  document: PropTypes.object,
  onChangeDocument: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDocument: (editorState) => {
      dispatch(changeDocument(editorState));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  document: makeSelectDocument(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'editor', reducer});

export default compose(
  withReducer,
  withConnect,
)(Editor);
