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
    // marginBottom: 30,
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
  messageDetailsContent: {
    flex: 1,
    position: 'relative',
  },
  scrollViewContent: {
    height: '100%',
  },
  viewListingBtn: {
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  bottomMessageContainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 10,
    width: '100%',
  },
  messageFieldWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 40,
    paddingLeft: 10,
    width: '85%',
    marginRight: 'auto',
  },
  messageTextInput: {
    flex: 1,
    marginLeft: 10,
  },
  sendMessageBtn: {
    backgroundColor: '#00AB6B',
    borderRadius: 5,
    height: '100%',
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    padding: 16,
  },
  viewListingBtn: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
});

export default styles;
