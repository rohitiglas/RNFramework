import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 0},
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'green',
    height: 40,
    justifyContent: 'center',
  },
  logoText: {textAlign: 'center', fontSize: 26, marginBottom: 20},
  error: {fontSize: 12, marginLeft: 20, color: 'red'},
  buttonText: {color: 'white', fontSize: 16},
});

export default styles;
