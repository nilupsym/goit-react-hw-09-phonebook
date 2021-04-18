import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  
  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="user avatar" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
        </button>
    </div>
  );
}