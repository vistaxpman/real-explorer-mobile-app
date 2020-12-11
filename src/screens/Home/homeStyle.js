import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#F8F9FD',
    paddingVertical: 30,
  },
  headerText1: {fontSize: 16, fontWeight: '500'},
  headerText2: {fontSize: 20, fontWeight: '500', marginBottom: 40},
  searchContainer: {
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 11,
    left: 5,
  },
  searchInput: {
    fontSize: 15,
    width: '100%',
    height: '100%',
    paddingLeft: 32,
  },
  paddingRight5: {
    paddingRight: 5,
  },
  paddingRight30: {
    paddingRight: 30,
  },
  clearTextIcon: {position: 'absolute', top: 10, right: 5},
});

export default styles;
