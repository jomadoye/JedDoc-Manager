import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../../actions/documentAction';
import CardDocumentView from '../../common/CardDocumentView.jsx';
import PaginationNav from '../../common/PaginationNav.jsx';

class MyDocumentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: [...props.documents.MyDocuments],
      selected: 1,
      page: 1,
      isPageLoad: false,
    };
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    const { UserId } = this.props;
    this.props.loadUserDocuments(UserId);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ documents: [...nextProps.documents.MyDocuments] });
    if (this.props !== nextProps.props) {
      const { isPageLoad } = this.state;
      const { MyDocuments } = nextProps.documents;
      const { UserId } = this.props;
      if (!isPageLoad) {
        if (MyDocuments) {
          const page = Math.ceil(MyDocuments.length / 5);
          this.props.loadUserDocuments(UserId, 5, 0);
          this.setState({ page });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }
  handlePagination(limit, offset, event) {
    const { UserId } = this.props;
    this.props.loadUserDocuments(UserId, limit, offset);
    this.setState({ selected: event.target.innerHTML });
  }

  render() {
    const MyDocuments = this.state.documents;
    const privateDocuments = [];
    const publicDocuments = [];
    const roleDocuments = [];
    MyDocuments.map((document) => {
      if (document.access === 'private') {
        privateDocuments.push(document);
      } else if (document.access === 'public') {
        publicDocuments.push(document);
      } else if (document.access === 'role') {
        roleDocuments.push(document);
      }
    });
    const { selected, page } = this.state;
    const isActive = 'active';
    const notActive = 'waves-effect';
    let pageArray;
    if (page) {
      pageArray = new Array(page).fill('pages');
    }
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4">
                  <a href="#test2">Public Documents</a></li>
                <li className="tab col s4">
                  <a href="#test1">Private Documents</a></li>
                <li className="tab col s4">
                  <a href="#test3">Role Documents</a></li>
              </ul>
          </div>
           <div id="test1" className="col s12">
            <br />
              { MyDocuments && privateDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 myDocument/>)}
          </div>
          <div id="test2" className="col s12">
            <br />
              { MyDocuments && publicDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                myDocument/>)}
          </div>
          <div id="test3" className="col s12">
            <br />
              { MyDocuments && roleDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 myDocument/>)}
          </div>
          <div className="center-align">
            <ul className="pagination">
              {
              <div>
                <li className="waves-effect"><a href="#!">
                  <i className="material-icons">chevron_left</i></a></li>
                {page && pageArray && pageArray.map((pages, index) =>
                (<PaginationNav
                  key={index}
                  selected={selected}
                  index={index}
                  isActive={isActive}
                  notActive={notActive}
                  handlePagination={this.handlePagination}
                  />))
                }
                <li className="waves-effect"><a href="#!">
                  <i className="material-icons">chevron_right</i></a></li>
              </div>
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

MyDocumentPage.propTypes = {
  loadUserDocuments: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
  UserId: PropTypes.number.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {any} dispatch
 * @returns dipatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadUserDocuments: (userId, limit, offset) =>
      dispatch(DocumentAction.loadUserDocuments(userId, limit, offset)),
  };
}

/**
 * mapStateToProps
 *
 * @param {any} state
 * @returns {object} state
 */
function mapStateToProps(state) {
  return {
    documents: state.documents,
    UserId: state.login.user.id,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDocumentPage);
