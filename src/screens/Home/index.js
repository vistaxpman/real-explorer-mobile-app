import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './homeStyle';
import LandingPage from './LandingPage';
import SearchResult from './SearchResult';

export function Home({navigation}) {
  const [data, setData] = useState({
    activePage: 'LandingPage',
    searchText: '',
  });

  const handleNavigation = (route, param) => {
    navigation?.navigate(route, {
      param,
    });
  };

  const handleActivePage = (params) => {
    const obj = {};
    for (const property in params) {
      obj[property] = params[property];
    }
    setData({...data, ...obj});
  };

  return (
    <View style={styles.homeContainer}>
      {data?.activePage === 'LandingPage' ? (
        <LandingPage toggleActivePage={handleActivePage} />
      ) : data?.activePage === 'SearchResult' ? (
        <SearchResult
          toggleActivePage={handleActivePage}
          searchText={data.searchText}
        />
      ) : null}
    </View>
  );
}
