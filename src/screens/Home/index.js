import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './homeStyle';

export function Home() {
  const [data, setData] = useState({
    searchText: '',
    isSearchFocused: false,
  });

  const inputRef = useRef(null);

  const handleSetData = (key, value) => {
    const obj = data;
    obj[key] = value;
    setData({...data, ...obj});
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText1}>Find Thousand of Homes</Text>
        <Text style={styles.headerText2}>For Rent &amp; Buy</Text>
        <View style={styles.searchContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              inputRef.current.focus();
            }}>
            <EvilIcons
              name="search"
              size={22}
              color="#AEAEBF"
              style={styles.searchIcon}
            />
          </TouchableWithoutFeedback>
          <TextInput
            ref={inputRef}
            placeholder="Search for property"
            style={[
              styles.searchInput,
              !data.searchText ? styles.paddingRight5 : styles.paddingRight30,
            ]}
            value={data.searchText}
            onChangeText={(inputValue) =>
              setData({...data, searchText: inputValue})
            }
            onFocus={() => handleSetData('isSearchFocused', true)}
            onBlur={() => handleSetData('isSearchFocused', false)}
          />
          {data.searchText ? (
            <TouchableWithoutFeedback
              onPress={() => handleSetData('searchText', '')}>
              <EvilIcons
                name="close"
                size={25}
                color="#AEAEBF"
                style={styles.clearTextIcon}
              />
            </TouchableWithoutFeedback>
          ) : null}
        </View>
      </View>
    </View>
  );
}
