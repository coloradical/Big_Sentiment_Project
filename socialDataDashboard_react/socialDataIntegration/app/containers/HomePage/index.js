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
import CenteredSection from './CenteredSection';
// import Input from './Input';
import messages from './messages';
import { changeTopic, searchTopic, resetHomePageState } from './actions';
import {
  makeSelectTopic, makeSelectTopicInfo,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import { CustomVisuals } from '../CustomVisuals';
import saga from './saga';
import TopicInfo from '../../components/TopicInfo';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WorldCard from '../../components/WorldCard';
import FontAwesome from '../../components/Homebutton';
import MapViewV1 from '../../components/MapViewV1';
import Search from '../Search';
import PersonCard from '../../components/PersonCard';
import TopicPalette from "../../components/TopicPalette";



/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
    
  }
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }
  keyPress(e) {
    if (e.keyCode == 13) {
      this.props.onSearchTopic(this.props.topic);
      this.props.onTwittProfile(this.props.topic)
    }
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

    return (
      <article>
        <Helmet>
          <title>Dashboard</title>
          <meta
            name="description"
            content="Socia Data Integration Dashboard"
          />
        </Helmet>
        <div className="container-fluid">
          <div className="row">
            <Button color="primary" onClick={this.props.resetProps}><FontAwesome/></Button>
          </div>
          <div className="row">
            <CenteredSection>
              <H1>
               Hello
              </H1>
              <label htmlFor="topic" style={{ width: '60%' }}>

           <TextField
          id="outlined-full-width"
          label="Search"
          style={{ margin: 8 }}
          placeholder="Search your favourite hashtags"
          helperText="Press any key to search"
          fullWidth
          margin="normal"
          variant="outlined"
          onKeyDown={this.keyPress}
          value={this.props.topic}
          onChange={this.props.onChangeTopic}
          InputLabelProps={{
            shrink: true,
          }}/>
          {/* <Search></Search> */}
                
              </label>
            </CenteredSection>
          </div>
          {/* { this.props.topicInfo['name'] ? <TopicInfo topicInfo={this.props.topicInfo} />: console.log("No data")} */}
          { this.props.topicInfo['name'] ? <PersonCard topicInfo={this.props.topicInfo} />: console.log("No data")}
        
          <CustomVisuals topicName={this.props.topicInfo['name'] ? this.props.topicInfo['name'] : ''} topicType={this.props.topicInfo['@type'] ? this.props.topicInfo['@type'] : []} />

          
        </div>
       
       { this.props.topicInfo['name'] ?  console.log("No data"): <div><TopicPalette/><center><MapViewV1/></center></div>}
       

         

      </article>
      
    );
    
    
  }
}




HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  topicInfo: PropTypes.object,
  twittinfo :PropTypes.object,
  // onSubmitForm: PropTypes.func,
  topic: PropTypes.string,
  onChangeTopic: PropTypes.func,
  onSearchTopic: PropTypes.func,
  resetProps: PropTypes.func,
  onTwittProfile : PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSearchTopic: topic => dispatch(searchTopic(topic)),
    onChangeTopic: evt => dispatch(changeTopic(evt.target.value)),
    onTwittProfile: topic => dispatch(TwittProfile(topic)),
    resetProps: val => dispatch(resetHomePageState()), 
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  topicInfo: makeSelectTopicInfo(),
  topic: makeSelectTopic(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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

