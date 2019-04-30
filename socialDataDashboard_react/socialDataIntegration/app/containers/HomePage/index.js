/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import logo from '../../images/map.jpg';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from 'components/H1';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
// import Input from './Input';
import messages from './messages';
import Suggestions from '../../components/Suggestions';
import { changeTopic, searchTopic, resetHomePageState, selectTopic, getGlobeTags } from './actions';
import {
  makeSelectTopic,
  makeSelectTopicInfo,
  makeSelectLoading,
  makeSelectError,
  makeSelectFuzzyResults,
  makeSelectglobeTags,
} from './selectors';
import reducer from './reducer';
import CustomVisuals from '../CustomVisuals';
import saga from './saga';
import TextField from '@material-ui/core/TextField';
import ParticlesBackground from '../../components/ParticlesBackground';
import SimpleGlobe from '../../components/SimpleGlobe';
import worldlogo from "images/world_logo.png";
import github from "images/github.png";


/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
    console.log('Homepage mounted');
    this.props.triggerGetGlobeTags();
  }
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.onSelectFuzzySearchTopic = this.onSelectFuzzySearchTopic.bind(this);
  }
  keyPress(e) {
    if (e.keyCode == 13) {
      this.props.onSearchTopic(this.props.topic);
    }
  }
  onSelectFuzzySearchTopic(topic) {
    this.props.onSelectFuzzyTopic(topic);
    this.props.onSearchTopic(topic);
  }
  render() {
    const { loading, error, topicInfo } = this.props;
    const reposListProps = {
      loading,
      error,
    };

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
      },
    };
    console.log(this.props.globeTags);
    return (

      <article >
        <Helmet>
          <title>World in a Hashtag</title>
          <meta
            name="Sentiment Analyzer"
            content="Sentiment analysis based on Twitter and Reddit info"
          />
        </Helmet>

        <div className="container-fluid" >
          <div className="row">

            <CenteredSection >
              <br></br><br></br>
              <center><a href=""><img src={worldlogo} alt="Logo" style={{ width: '20%' }} /></a></center>

              <label htmlFor="topic" style={{ width: '70%' }}>
                <br></br>
                <center><H2> A Twitter and Reddit sentiment analyzer presenting the World's opinions on people, places and events. </H2></center>
                <br></br>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8, backgroundColor: '#151960' }}
                  placeholder="Search your favorite hashtags"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  autoComplete="Off"
                  onKeyDown={this.keyPress}
                  value={this.props.topic}
                  onChange={this.props.onChangeTopic}
                  InputLabelProps={{
                    shrink: true,
                  }} />
                <Suggestions onSuggestionSelection={this.onSelectFuzzySearchTopic} results={this.props.fuzzySearchResults} />
              </label>
            </CenteredSection>
          </div>
          <CustomVisuals topicInfo={this.props.topicInfo} />
        </div>

        {this.props.topicInfo['name'] ? console.log("No data") :
          <div id="particles">

            <center>
              <ParticlesBackground />
              <SimpleGlobe id="globe" />
              <br></br><br></br>
              <H2> Created by Kamal Chaturvedi, Megan Byers, Michael Chifala, Nishank Sharma, and Yash Sapra </H2><a href="https://github.com/CUBigDataClass/Big_Sentiment"><img src={github} alt="github logo" style={{ width: '3%' }} /></a>
            </center>

          </div>}
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  topicInfo: PropTypes.object,
  // onSubmitForm: PropTypes.func,
  topic: PropTypes.string,
  onChangeTopic: PropTypes.func,
  onSearchTopic: PropTypes.func,
  resetProps: PropTypes.func,
  fuzzySearchResults: PropTypes.array,
  onSelectFuzzyTopic: PropTypes.func,
  triggerGetGlobeTags: PropTypes.func,
  globeTags: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSearchTopic: topic => dispatch(searchTopic(topic)),
    onSelectFuzzyTopic: topic => dispatch(selectTopic(topic)),
    onChangeTopic: evt => dispatch(changeTopic(evt.target.value)),
    triggerGetGlobeTags: val => dispatch(getGlobeTags()),
    resetProps: val => dispatch(resetHomePageState()),
  };
}

const mapStateToProps = createStructuredSelector({
  topicInfo: makeSelectTopicInfo(),
  topic: makeSelectTopic(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  fuzzySearchResults: makeSelectFuzzyResults(),
  globeTags: makeSelectglobeTags(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
