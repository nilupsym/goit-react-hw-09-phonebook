import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

export default function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectors.getFilteredContacts);

    const handleDeleteContact = id => {
        dispatch(operations.deleteContact(id));
    };

    return (
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
        </ul>
    );
}