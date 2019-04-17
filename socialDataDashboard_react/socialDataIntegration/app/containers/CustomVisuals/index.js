/**
 *
 * CustomVisuals
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { EVENT, PERSON, PLACE } from './topicTypeDefinition';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCustomVisuals, makeSelectTopicType } from './selectors';
import reducer from './reducer';
import saga from './saga';
import EventDashboard from '../EventDashboard';
import PersonDashboard from '../PersonDashboard';
import PlaceDashboard from '../PlaceDashboard';
import WorldMap from '../../components/WorldMap';
import { changeTopicType } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CustomVisuals extends React.PureComponent {
  loadRespectiveDashboard() {
    if (this.props.topicType.length > 0) {
      var typeArray = this.props.topicType;
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] == EVENT) {
          return <EventDashboard />;
        } else if (typeArray[i] == PLACE) {
          return <PlaceDashboard />;
        } else if (typeArray[i] == PERSON) {
          return <PersonDashboard topicInfo={this.props.topicInfo} />;
        }
      }
    }
    return <WorldMap />;
  }
  render() {
    console.log(this.props.topicType);
    return (

      <div
        className="row"
        style={{ marginTop: '2em', backgroundColor: 'white' }}
      >

        {/* <p>{this.props.topicType.length > 0 ? this.props.topicType: ''}</p> */}
        {this.loadRespectiveDashboard()}
      </div>
    );
  }
}

CustomVisuals.propTypes = {
  topicType: PropTypes.array,
  topicName: PropTypes.string,
  topicInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  customVisuals: makeSelectCustomVisuals(),
  // topicType: makeSelectTopicType(),
});

function mapDispatchToProps(dispatch) {
  return {
    // updateTopicType: topicType => dispatch(changeTopicType(topicType)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customVisuals', reducer });
const withSaga = injectSaga({ key: 'customVisuals', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CustomVisuals);
