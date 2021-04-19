import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-page" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-page" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-page" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-page" */));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  
  return (
    <Container>
      <AppBar />
        
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/"><HomeView /></PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts"><RegisterView /></PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts"><LoginView /></PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login"><ContactsView /></PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}