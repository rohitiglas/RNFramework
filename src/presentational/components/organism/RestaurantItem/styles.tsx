import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {margin: 5, width: 220},
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  cuisines: {
    fontFamily: 'Basis Grotesque Pro',
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 19,
    letterSpacing: -0.3,
    color: 'rgba(2, 6, 12, 0.6)',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap', // Equivalent to overflow-wrap: break-word
    flexDirection: 'column', // Equivalent to -webkit-box-orient: vertical
    // If you want to limit the number of lines (similar to -webkit-line-clamp: 1),
    // you can use the numberOfLines property in React Native's Text component.
  },
  name: {
    margin: 0,
    fontFamily: 'Basis Grotesque Pro',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.3,
    color: 'rgba(2, 6, 12, 0.75)',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap', // Equivalent to overflow-wrap: break-word
    flexDirection: 'column', // Equivalent to -webkit-box-orient: vertical
    // If you want to limit the number of lines (similar to -webkit-line-clamp: 1),
    // you can use the numberOfLines property in React Native's Text component.
  },
});

export default styles;
