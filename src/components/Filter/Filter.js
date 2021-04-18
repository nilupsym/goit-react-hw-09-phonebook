import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import selectors from '../../redux/selectors';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(selectors.getFilter);

    const onChange = useCallback(e => {
        dispatch(actions.changeFilter(e.target.value));
    }, [dispatch]);
    return (
        <label>
            Find contacts by name
            <br />
            <input type='text' value={value} onChange={onChange} placeholder='Search contacts' />
        </label>);
}