/**
 *
 * TopicInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import Card from './Card';
// import styled from 'styled-components';
import PopDiv from './PopDiv';
import ColoredHeader from './ColoredHeader';
import ColoredDescription from './ColoredDescription';

/* eslint-disable react/prefer-stateless-function */
class TopicInfo extends React.PureComponent {
  render() {
    console.log(this.props.topicInfo);
    return (
      <Card className="row">
        <PopDiv className="col align-self-center">
          <Img src={this.props.topicInfo.image ? this.props.topicInfo.image.contentUrl : ''} alt="" />
        </PopDiv>
        <div className="col align-self-center" style={{marginRight: '1em'}}>
          <div className="row">
            <ColoredHeader>
              {this.props.topicInfo.name}
            </ColoredHeader>
          </div>
          <div className="row">
            <ColoredDescription>{this.props.topicInfo.description}</ColoredDescription>
          </div>
          <div className="row">
            <p style={{color: 'white'}}>{this.props.topicInfo.detailedDescription ? this.props.topicInfo.detailedDescription.articleBody : ''}</p>
          </div>
        </div>
      </Card>
    );
  }
}

TopicInfo.propTypes = {
  topicInfo: PropTypes.object
};

export default TopicInfo;
