/**
 *
 * PlaceDashboard
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
import makeSelectPlaceDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from '../PersonDashboard/H1';
import PieChart from '../../components/PieChart';

/* eslint-disable react/prefer-stateless-function */
export class PlaceDashboard extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid" style={{marginTop: '2em'}}>
        <Helmet>
          <title>PlaceDashboard</title>
          <meta name="description" content="Description of PlaceDashboard" />
        </Helmet>
        <div className="row">
          <div className="col">
            <H1>Plotting basic Pie chart</H1>
          </div>
          <div className="col">
          <PieChart/>
          </div>
        </div>
      </div>
    );
  }
}

PlaceDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  placeDashboard: makeSelectPlaceDashboard(),
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

const withReducer = injectReducer({ key: 'placeDashboard', reducer });
const withSaga = injectSaga({ key: 'placeDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlaceDashboard);
