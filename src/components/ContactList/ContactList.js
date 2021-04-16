import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = ({filteredContacts, handleDeleteContact}) => (
    <ul className={styles.list}>
        {
            filteredContacts.map(filteredContact => (
                <ContactListItem
                    key={filteredContact.id}
                    id={filteredContact.id}
                    name={filteredContact.name}
                    number={filteredContact.number}
                    handleDeleteContact={handleDeleteContact}
                />))
        }
    </ul>);

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string
        })
    ).isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
};

// const getFilteredContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = (state) => ({
  filteredContacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
    handleDeleteContact: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);