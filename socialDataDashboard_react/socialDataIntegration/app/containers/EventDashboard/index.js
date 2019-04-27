/**
 *
 * EventDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PersonCard from '../../components/PersonCard';
import PhotoGrid from '../../components/PhotoGrid';
import TweetList from '../../components/TweetList';
import Trends from '../../components/Trends';
import GoogleMaps from '../../components/GoogleMaps';
import SentimentChart from '../../components/SentimentChart';

/* eslint-disable react/prefer-stateless-function */
export class EventDashboard extends React.PureComponent {
  render() {
    return (
      <article>
      
      <div className="container-fluid" style={{ marginTop: '2em' }}>

        <div className="row">
        
          <div className="col">
            <br></br><br></br>
              <PersonCard topicInfo={this.props.topicInfo} twitterInfo={this.props.twitterInfo} />
          </div>
          <div className="col">
            <TweetList topicTweet={this.props.topicTweet} />
          </div>

          <div className='col'>
            {/* <SentimentChart sentimentInfo={this.props.sentimentInfo} />  */}
            {/* TO DO: Needs data  */}
            <SentimentChart sentimentInfo={this.props.sentimentInfo} />
          </div>

          <div className="col">
            <Trends topicTweet={this.props.topicTweet} /> 
            <GoogleMaps/>
          </div>

        </div>

        <div className="row" >
          <div className="col-12" >
            
            
          </div>
        </div>


        <div className="row">
          <br /> <br /><br /><br />
        </div>
      </div >
    </article>
    );
  }
}

EventDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topicInfo: PropTypes.object,
  topicTweet: PropTypes.array,
  topicImage: PropTypes.array,
  twitterInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  eventDashboard: makeSelectEventDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventDashboard', reducer });
const withSaga = injectSaga({ key: 'eventDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventDashboard);
