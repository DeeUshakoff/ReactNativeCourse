import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 8,
  },
  verticalSeparator: {
    height: '100%',
    backgroundColor: 'gray',
  },
  borderRadius: {
    borderRadius: 25,
  },
  flex: {
    display: 'flex',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  titleXL: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 36,
    height: 150,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  padding8: {
    padding: 8,
  },
  marginTop8: {
    marginTop: 8,
  },
  input: {
    minHeight: 50,
    borderRadius: 25,
    borderWidth: 1,
    padding: 8,
  },
});
