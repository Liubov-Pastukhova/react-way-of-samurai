import React from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Newspage from '../Newspage/Newspage';
import Music from '../Music/Music';
import { Settings } from '../../components/Settings/Settings';
import NavbarContainer from '../Navbar/NavbarContainer';
import FriendsContainer from '../Friends/FriendsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/Login';


const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/newspage' render={() => <Newspage />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/friends' render={() => <FriendsContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;

