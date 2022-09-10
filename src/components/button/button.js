import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = () => (
  <div className={styles.Button} data-testid="Button">
    Button Component
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
