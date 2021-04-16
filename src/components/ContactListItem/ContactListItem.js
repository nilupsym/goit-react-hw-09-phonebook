import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, handleDeleteContact }) => (
  <li key={id} className={styles.item}>
    <span>
      {name}: {number}
    </span>
    <button className={styles.btn} onClick={() => handleDeleteContact(id)}>Delete</button>
  </li>);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;