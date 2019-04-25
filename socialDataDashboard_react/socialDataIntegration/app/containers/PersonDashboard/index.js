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
import messages from './messages';
import BarGraph from '../../components/BarGraph';
import PieChart from '../../components/PieChart';
import SentimentChart from '../../components/SentimentChart';

import PersonCard from '../../components/PersonCard';
import TopTweet from '../../components/TopTweet';
import TweetList from '../../components/TweetList';
import Trends from '../../components/Trends';
import PhotoGrid from '../../components/PhotoGrid';
import Typography from '@material-ui/core/Typography';
import worldlogo from "images/world_logo.png";
/* eslint-disable react/prefer-stateless-function */



export class PersonDashboard extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTopicInfo(this.props.topicInfo['name']);
    
   
  }
  componentDidUpdate(prevProps) {
    console.log(sentimentInfo)
    // Typical usage (don't forget to compare props):
    if (this.props.topicInfo !== prevProps.topicInfo) {
      this.props.fetchTopicInfo(this.props.topicInfo['name']);
    }
  }
  
  render() {

    return (
      <article>

        <div className="container-fluid" style={{ marginTop: '2em' }}>


          <div className="row">

            <div className="col">
              <TopTweet />
            </div>
          </div>
          <div className="row">
            <br /> <br /><br /><br />
          </div>


          <div className="row">
            <div className="col">
              <PersonCard topicInfo={this.props.topicInfo} twitterInfo={this.props.twitterInfo} />
            </div>

            <div className="col">
              <center>
                <SentimentChart /> 
                {/* twentieth  */}
                {/* <Sentiment /> */}
              </center>
            </div>
            <div className="col-6" >
              <TweetList topicTweet={this.props.topicTweet} /> 
              {/* this is where it accepts the query name */}
            </div>

          </div>

          <div className="row">
            <br /> <br /><br /><br />
          </div>


          <div className="row" >
            <Trends topicAggregate={this.props.topicAggregate} />

          </div>

          <div className="row">
            <br /> <br /><br /><br />
          </div>
          <div className="row" >
            <div className="col" />
            <div className="col">
              <PhotoGrid topicImage={this.props.topicImage} />
            </div>
            <div className="col" />

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
  topicAggregate: PropTypes.object,
  topicTweet: PropTypes.array, 
  topicImage: PropTypes.array,
  twitterInfo: PropTypes.object,
  fetchTopicInfo: PropTypes.func.isRequired,
  sentimentInfo: PropTypes.object, //ninteenth
};

const mapStateToProps = createStructuredSelector({
  personDashboard: makeSelectPersonDashboard(),
  topicAggregate: makeSelectTopicAggregate(),
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
