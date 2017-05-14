import React from 'react';
import { connect } from 'react-redux';
import * as DocumentAction from '../../../actions/documentAction';
import CardDocumentView from '../../common/CardDocumentView.jsx';

class MyDocumentPage extends React.Component {
  componentDidMount() {
    const { UserId } = this.props;
    this.props.loadUserDocuments(UserId);
  }
  render() {
    const { MyDocuments } = this.props;
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col s12">
              <ul className="tabs">
                {/*<li className="tab col s3"><a href="#test4">All Documents</a></li>*/}
                <li className="tab col s4"><a href="#test2">Public Documents</a></li>
                <li className="tab col s4"><a href="#test1">Private Documents</a></li>
                <li className="tab col s4"><a href="#test3">Role Documents</a></li>
              </ul>
          </div>
           <div id="test1" className="col s12">
            <br />
              { MyDocuments && MyDocuments.map((document) => {
                if (document.access === 'private') {
                  return <CardDocumentView document={document} key={document.id} myDocument/>;
                }
              })}
          </div>
          <div id="test2" className="col s12">
            <br />
              { MyDocuments && MyDocuments.map((document) => {
                if (document.access === 'public') {
                  return <CardDocumentView document={document} key={document.id} myDocument/>;
                }
              })}
          </div>
         
          <div id="test3" className="col s12">
            <br />
              { MyDocuments && MyDocuments.map((document) => {
                if (document.access === 'role') {
                  return <CardDocumentView document={document} key={document.id} myDocument/>;
                }
              })}
          </div>
          {/*<div id="test4" className="col s12">
            <br />
              { MyDocuments && MyDocuments.map(document =>
                    <CardDocumentView document={document} key={document.id} myDocument/>)}
          </div>*/}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserDocuments: userId => dispatch(DocumentAction.loadUserDocuments(userId)),
  };
}

function mapStateToProps(state) {
  return {
    MyDocuments: state.documents.MyDocuments,
    UserId: state.login.user.id,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDocumentPage);
