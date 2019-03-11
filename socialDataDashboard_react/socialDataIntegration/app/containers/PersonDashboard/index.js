/**
 *
 * PersonDashboard
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
import makeSelectPersonDashboard, { makeSelectTopicAggregate } from './selectors';
import { getTopicInfo } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from './H1';
import BarGraph from '../../components/BarGraph';
import PieChart from '../../components/PieChart';
import Card from './Card';
/* eslint-disable react/prefer-stateless-function */
export class PersonDashboard extends React.PureComponent {
  componentDidMount(){
    this.props.fetchTopicInfo(this.props.name);
  }
  render() {
    let entryMap = {};
    let tempEntry = {};
    console.log(this.props.topicAggregate);
    for(let i=0;i<this.props.topicAggregate.length;i++){
      for(let j=0;j<this.props.topicAggregate[i].delayCount.buckets.length;j++){
        tempEntry = this.props.topicAggregate[i].delayCount.buckets[j];
        if(entryMap[tempEntry.key_as_string]){
          entryMap[tempEntry.key_as_string] += tempEntry.doc_count;
        } else {
          entryMap[tempEntry.key_as_string] = tempEntry.doc_count;
        }
      }
    }
    console.log(entryMap);
    return (
      <div className="container-fluid" style={{ marginTop: '2em' }}>
        <Helmet>
          <title>PersonDashboard</title>
          <meta name="description" content="Description of PersonDashboard" />
        </Helmet>
        <div className="row">
          <Card className="col">
            {(this.props.topicAggregate.length > 0)?<PieChart data = {this.props.topicAggregate}/>:console.log('No data')}
          </Card>
          <Card className="col">
            {(this.props.topicAggregate.length > 0)?<BarGraph data = {entryMap} ytitleText = {'Flight Delays'} xtitleText = {'Delay Count'}/>:console.log('No data')}
          </Card>
        </div>
      </div>
    );
  }
}

PersonDashboard.propTypes = {
  name: PropTypes.string,
  topicAggregate: PropTypes.array,
  fetchTopicInfo: PropTypes.func.isRequired,
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
