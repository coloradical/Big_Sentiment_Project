/**
 *
 * CustomVisuals
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { EVENT, PERSON, PLACE } from './topicTypeDefinition';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCustomVisuals, makeSelectTopicTweet, makeSelectTopicImage, makeSelectTwitterInfo } from './selectors';
import reducer from './reducer';
import saga from './saga';
import EventDashboard from '../EventDashboard';
import PersonDashboard from '../PersonDashboard';
import PlaceDashboard from '../PlaceDashboard';
import WorldMap from '../../components/WorldMap';
import { pullRelatedData } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CustomVisuals extends React.PureComponent {
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log('PROPS UPDATED ____________________');
    console.log(this.props.topicInfo);
    if (this.props.topicInfo !== prevProps.topicInfo) {
      console.log('CUSTOM API CALLED ____________________');
      this.props.fetchTopicInfo(this.props.topicInfo['name']);
    }
  }
  loadRespectiveDashboard() {
    if (this.props.topicInfo['@type'] && this.props.topicInfo['@type'].length > 0) {
      var typeArray = this.props.topicInfo['@type'];
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] == EVENT) {
          return <EventDashboard topicInfo={this.props.topicInfo} topicTweet={this.props.topicTweet} topicImage={this.props.topicImage} twitterInfo={this.props.twitterInfo}/>;
        } else if (typeArray[i] == PLACE) {
          return <PlaceDashboard topicInfo={this.props.topicInfo} topicTweet={this.props.topicTweet} topicImage={this.props.topicImage} twitterInfo={this.props.twitterInfo}/>;
        } else if (typeArray[i] == PERSON) {
          return <PersonDashboard topicInfo={this.props.topicInfo} topicTweet={this.props.topicTweet} topicImage={this.props.topicImage} twitterInfo={this.props.twitterInfo} />;
        }
      }
      return <PersonDashboard topicInfo={this.props.topicInfo} topicTweet={this.props.topicTweet} topicImage={this.props.topicImage} twitterInfo={this.props.twitterInfo} />;
    }
    return <WorldMap />;
  }
  render() {
    console.log(this.props.topicInfo);
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
  topicInfo: PropTypes.object,
  topicTweet: PropTypes.array,
  topicImage: PropTypes.array,
  twitterInfo: PropTypes.object,
  fetchTopicInfo: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  customVisuals: makeSelectCustomVisuals(),
  topicTweet: makeSelectTopicTweet(),
  topicImage: makeSelectTopicImage(),
  twitterInfo: makeSelectTwitterInfo(),
});
function mapDispatchToProps(dispatch) {
  return {
    fetchTopicInfo: name => dispatch(pullRelatedData(name)),
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
