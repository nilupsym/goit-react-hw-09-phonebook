import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import selectors from '../../redux/selectors';

const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name
         <br />
        <input type='text' value={value} onChange={onChange} placeholder='Search contacts' />
    </label>);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ value: selectors.getFilter(state), });

const mapDispatchToProps = dispatch => ({ onChange: (e) => dispatch(actions.changeFilter(e.target.value)) });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);