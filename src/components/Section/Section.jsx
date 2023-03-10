import React from 'react';
import PropTypes from 'prop-types';
import { Conteiner } from './Section.styled';

const Section = ({ title, children }) => (
  <div>
    <Conteiner>
      <h1>{title}</h1>
      {children}
    </Conteiner>
  </div>
);
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
