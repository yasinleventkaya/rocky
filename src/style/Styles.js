import {StyleSheet} from 'react-native';
import Colors from './Colors';

const fonts = {
  xxs: 8,
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
  xxl: 22,
  xxxl: 26,
  huge: 32,
};

const baseStyles = {
  containerBase: {
    flex: 1,
    backgroundColor: Colors.softGray,
  },
  textBase: {
    color: Colors.darkGray,
    padding: 8,
  },
  button: {
    textAlign: 'center',
    padding: 8,
    color: Colors.darkGray,
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    borderWidth: 2,
  },
};

const StyleSheets = StyleSheet.create({
  container: {
    ...baseStyles.containerBase,
  },
  centeredContainer: {
    ...baseStyles.containerBase,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.darkYellow,
    backgroundColor: Colors.yellow,
    textAlign: 'center',
    fontSize: fonts.xxxl,
    fontWeight: 'bold',
    padding: 8,
  },
  text1: {
    ...baseStyles.textBase,
    fontSize: fonts.xl,
    fontWeight: 'bold',
  },
  text2: {
    ...baseStyles.textBase,
    fontSize: fonts.l,
  },
  primaryButton: {
    backgroundColor: Colors.blue,
    borderColor: Colors.darkBlue,
    fontSize: 18,
    ...baseStyles.button,
  },
  secondaryButton: {
    backgroundColor: Colors.yellow,
    borderColor: Colors.darkYellow,
    fontSize: 14,
    ...baseStyles.button,
  },
  smallImg: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  mediumImg: {
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
  largeImg: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  listDividerLine: {
    height: 5,
    backgroundColor: Colors.softBlue,
  },
  listDividerSpace: {
    height: 10,
    backgroundColor: Colors.transparent,
  },
  personList: {
    margin: 10,
  },
  personCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    // borderWidth: 5,
    // borderColor: Colors.blue,
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personCardPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  personCardTextContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  personCardTitle: {
    color: Colors.blue,
    fontSize: fonts.xxl,
  },
  personCardText: {
    color: Colors.softBlue,
    fontSize: fonts.l,
  },
});

export default StyleSheets;
