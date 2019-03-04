import styled from 'styled-components';
import Section from './Section';
import bgImage from '../../images/darkBackground.jpg';
const CenteredSection = styled(Section)`
  text-align: center;
  background-color: #f27a3a;
  background-image: url(${bgImage});
  background-size: cover;
  background-blend-mode: luminosity;
  width: 100%;
`;

export default CenteredSection;
