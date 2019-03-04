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
import makeSelectPersonDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from './H1';
import BarGraph from '../../components/BarGraph';

/* eslint-disable react/prefer-stateless-function */
export class PersonDashboard extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid" style={{marginTop: '2em'}}>
        <Helmet>
          <title>PersonDashboard</title>
          <meta name="description" content="Description of PersonDashboard" />
        </Helmet>
        <div className="row">
          <div className="col">
            <H1>Plotting basic Bar graph</H1>
          </div>
          <div className="col">
          <BarGraph/>
          </div>
        </div>
      </div>
    );
  }
}

PersonDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personDashboard: makeSelectPersonDashboard(),
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

const withReducer = injectReducer({ key: 'personDashboard', reducer });
const withSaga = injectSaga({ key: 'personDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PersonDashboard);
