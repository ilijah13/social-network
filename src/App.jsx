import './App.css';

import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from './redux/app-reduser';

function App(props) {
  const { store, initializeApp } = props;
  useEffect(() => {
    initializeApp();
  }, []);
  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route
              path="/dialogs"
              element={<DialogsContainer store={store} />}
            />
            <Route path="/users" element={<UsersContainer store={store} />} />
            <Route path="/login" element={<Login store={store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return { initialized: state.app.initialized };
};
export default connect(mapStateToProps, { initializeApp })(App);
