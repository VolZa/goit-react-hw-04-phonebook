import PropTypes from 'prop-types';
import { TitleS } from "./Title.styled";

export const Title = ({title}) => {
  return (
      <TitleS>{title }</TitleS>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};