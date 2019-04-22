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
  makeSelectTopicAggregate, makeSelectTopicTweet, makeSelectTopicImage
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
  render() {

    let entryMap = {};
    let tempEntry = {};
    console.log(this.props.topicInfo);
    console.log(this.props.topicAggregate);
    console.log(this.props.topicTweet);
    console.log(this.props.topicImage);
    // for (let i = 0; i < this.props.topicAggregate.length; i++) {
    //   for (
    //     let j = 0;
    //     j < this.props.topicAggregate[i].delayCount.buckets.length;
    //     j++
    //   ) {
    //     tempEntry = this.props.topicAggregate[i].delayCount.buckets[j];
    //     if (entryMap[tempEntry.key_as_string]) {
    //       entryMap[tempEntry.key_as_string] += tempEntry.doc_count;
    //     } else {
    //       entryMap[tempEntry.key_as_string] = tempEntry.doc_count;
    //     }
    //   }
    // }
    // console.log(entryMap);
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
              <PersonCard topicInfo={this.props.topicInfo} />
            </div>

            <div className="col">
              <center>
                <SentimentChart />
                {/* <Sentiment /> */}
              </center>
            </div>
            <div className="col-6" >
              <TweetList topicTweet={this.props.topicTweet} />
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


          {/* <div className="row">
          <Card className="col">
            {this.props.topicAggregate.length > 0 ? (
              <BarGraph
                data={entryMap}
                ytitleText={'Flight Delays'}
                xtitleText={'Delay Count'}
              />
            ) : (
                console.log('No data')
              )}
          </Card>
        </div> */}
        </div >
      </article>
    );
  }
}

PersonDashboard.propTypes = {
  topicInfo: PropTypes.object,
  topicAggregate: PropTypes.object,
  topicTweet: PropTypes.array,
  topicImage: PropTypes.array,
  fetchTopicInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personDashboard: makeSelectPersonDashboard(),
  topicAggregate: makeSelectTopicAggregate(),
  topicTweet: makeSelectTopicTweet(),
  topicImage: makeSelectTopicImage(),
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
