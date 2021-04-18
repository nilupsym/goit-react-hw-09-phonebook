import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = evt => { setName(evt.target.value); };

  const [email, setEmail] = useState('');
  const handleEmailChange = evt => { setEmail(evt.target.value); };

  const [password, setPassword] = useState('');
  const handlePasswordChange = evt => { setPassword(evt.target.value); };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(name, email, password);

    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <div>
      <h1>Registration page</h1>
      
      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label style={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}