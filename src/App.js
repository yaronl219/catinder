import { AppBar, Tabs, Tab, Dialog } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Switch, useHistory, Route, useLocation } from 'react-router-dom';
import { CardSwipePage } from './Pages/CardSwipePage';
import { LikedCatsPage } from './Pages/LikedCatsPage';
import { UserPrefPage } from './Pages/UserPrefPage';
import { useStore } from './store/storeContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PetsIcon from '@material-ui/icons/Pets';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import { AboutPage } from './Pages/AboutPage';
import { LocationError } from './cmps/LocationError';

function App() {

  const history = useHistory()
  const location = useLocation()
  const store = useStore()
  const { cardStore } = store

  const [tab, setTab] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasLocationError, setLocationError] = useState(false)

  const tabs = ['/home', '/liked', '/user', '/about']

  useEffect(() => {
    getUserLocation()
  }, [])

  useEffect(() => {
    const { pathname } = location
    setTabFromParam(pathname)
  }, [location.pathname])

  function setTabFromParam(param) {
    let view = tabs.findIndex(tab => tab === param)
    if (view < 0) view = 0
    setTab(view)
    history.push(tabs[view])
  }

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(navigatorSuccess,navigatorError)
  }

  function navigatorSuccess(ev) {
    console.log('app got loc')
    cardStore.setUserLocation(ev)
    cardStore.getUserPrefs()
    console.log('loaded')
    setIsLoaded(true)
  }

  function navigatorError(ev) {
    console.log('error',ev)
    setLocationError(true)
  }

  function onCloseLocationAndRetry() {
    setLocationError(false)
    getUserLocation()
  }

  return (
    <div className="App">
      <Dialog open={hasLocationError}>
        <LocationError onClose={onCloseLocationAndRetry} />
        </Dialog>
      <AppBar>
        <Tabs value={tab} variant="fullWidth" onChange={(ev, val) => setTabFromParam(tabs[val])}>
          <Tab icon={<PetsIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<PersonIcon />} />
          <Tab icon={<InfoIcon />} />
        </Tabs>
      </AppBar>
      {(isLoaded) ?
        <Switch>
          <Route component={AboutPage} path="/about" />
          <Route component={UserPrefPage} path="/user" />
          <Route component={LikedCatsPage} path="/liked" />
          <Route component={CardSwipePage} path="/" />
        </Switch>
        :
        <React.Fragment />
      }


    </div>
  );
}

export default App;
