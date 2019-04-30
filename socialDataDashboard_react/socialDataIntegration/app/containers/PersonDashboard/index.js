/**
 *
 * PersonDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPersonDashboard, {
  makeSelectTopicAggregate, makeSelectTopicTweet, makeSelectTopicImage, makeSelectTwitterInfo
} from './selectors';
import { getTopicInfo } from './actions';
import reducer from './reducer';
import saga from './saga';
import SentimentChart from '../../components/SentimentChart';
import PersonCard from '../../components/PersonCard';
import TweetList from '../../components/TweetList';
import GoogleSearch from '../../components/GoogleSearch';
import Trends from '../../components/Trends';
import PhotoGrid from '../../components/PhotoGrid';
import TweetListWithSentiment from '../../components/TweetListWithSentiment';





export class PersonDashboard extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTopicInfo(this.props.topicInfo['name']);


  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.topicInfo !== prevProps.topicInfo) {
      this.props.fetchTopicInfo(this.props.topicInfo['name']);
    }
  }

  render() {
    console.log(this.props.topicImage)
    return (
      <article>

        <div className="container-fluid" style={{ marginTop: '2em' }}>


          <div className="row">

            <div className="col">
              {/* <TopTweet /> */}
            </div>
          </div>
          <div className="row">
            <br></br>
          </div>


          <div className="row">
            <div className="col">
              <br></br>
              <PersonCard topicInfo={this.props.topicInfo} twitterInfo={this.props.twitterInfo} />
            </div>

            <div className="col">
              <center>
                <SentimentChart sentimentInfo={this.props.sentimentInfo} />
                {/* <Sentiment /> */}
              </center>
            </div>
            <div className="col-6" >
              <TweetListWithSentiment topicTweet={this.props.topicTweet} />
              {/* this is where it accepts the query name */}
            </div>

          </div>

          <div className="row">

          </div>


          <div className="row" >
            <Trends topicAggregate={this.props.topicAggregate} />

          </div>

          <div className="row">
            <br /> <br /><br /><br />
          </div>
          <div className="row" >
            <div className="col">
              <PhotoGrid topicImage={this.props.topicImage} />
            </div>
            <div className="col-6" >
              <GoogleSearch googleSearch={this.props.googleSearch} />
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
// define property here 
PersonDashboard.propTypes = {
  topicInfo: PropTypes.object,
  topicAggregate: PropTypes.array,
  topicTweet: PropTypes.array,
  topicImage: PropTypes.array,
  twitterInfo: PropTypes.object,
  fetchTopicInfo: PropTypes.func.isRequired,
  sentimentInfo: PropTypes.array,
  googleSearch: PropTypes.array,
  imageSearch: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  personDashboard: makeSelectPersonDashboard(),
  // topicAggregate: makeSelectTopicAggregate(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicInfo: name => dispatch(getTopicInfo(name)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'personDashboard', reducer });
const withSaga = injectSaga({ key: 'personDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PersonDashboard);
