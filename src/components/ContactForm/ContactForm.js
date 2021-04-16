import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleAddContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.number === '') {
            alert('Please enter data');
            return;
        }
        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleAddContact} className={styles.form}>
                <label>
                    <p>Name</p>
                    <input
                        name='name'
                        value={name}
                        type='text'
                        placeholder='Name'
                        onChange={this.handleInputChange}
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
                        onChange={this.handleInputChange}
                        pattern='\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$'
                        title='Please, use the following format: 111-11-11'
                    />
                </label>
                <button type='submit' className={styles.button}>Add contact</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: ( name, number ) => dispatch(operations.addContact(name, number)),
})
export default connect(null, mapDispatchToProps)(ContactForm);