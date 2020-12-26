import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  messageDetailsContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  messageDetailsHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 30,
  },
  headerText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 16,
    width: '50%',
  },
  phoneIcon: {
    marginLeft: 10,
    marginRight: 20,
  },
});

export default styles;
