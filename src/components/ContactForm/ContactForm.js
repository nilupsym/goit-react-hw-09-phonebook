import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/operations';
import styles from './ContactForm.module.css';
import selectors from '../../redux/selectors';

export default function ContactForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleNameChange = (e) => {
        setName(e.currentTarget.value);
    };

    const handleNumberChange = useCallback(e => {
        setNumber(e.currentTarget.value);
    }, []);
    
    const contacts = useSelector(selectors.getFilteredContacts);
    const isInList = contacts.find(
                newContact => newContact.name.toLowerCase() === name.toLowerCase()
            );

    const handleAddContact = useCallback(e => {
        e.preventDefault();

        if (name === '' || number === '') {
            alert('Please enter data');
            return;
        }

        if (isInList) {
            alert(`Contact ${name} is already exist`);
            return;
        }
        
        dispatch(operations.addContact({ name, number }));
        reset();
    }, [dispatch, name, number, isInList]);

    const reset = () => {
        setName('');
        setNumber('')
    };
    
    return (
        <form onSubmit={handleAddContact} className={styles.form}>
            <label>
                <p>Name</p>
                <input
                    name='name'
                    value={name}
                    type='text'
                    placeholder='Name'
                    onChange={handleNameChange}
                    pattern='[a-zA-Z \u0400-\u04ff]{3,30}'
                />
            </label>
            <label>
                <p>Number</p>
                <input
                    name='number'
                    value={number}
                    type='tel'
                    placeholder='Number'
                    onChange={handleNumberChange}
                    pattern='\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$'
                    title='Please, use the following format: 111-11-11'
                />
            </label>
            <button type='submit' className={styles.button}>Add contact</button>
        </form>
    )
}