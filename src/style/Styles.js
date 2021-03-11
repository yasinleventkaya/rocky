import {StyleSheet} from 'react-native';
import Colors from './Colors';

const dimens = {
  xxs: 1,
  xs: 2,
  s: 5,
  m: 8,
  l: 12,
  xl: 20,
  xxl: 25,
  xxxl: 50,
  huge: 100,
  avatarImg: 50,
  avatarImgRadius: 25,
  smallImg: 100,
  mediumImg: 200,
  largeImg: 300,
};

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
    padding: dimens.m,
  },
  button: {
    textAlign: 'center',
    padding: dimens.m,
    color: Colors.darkGray,
    borderRadius: dimens.l,
    margin: dimens.l,
    overflow: 'hidden',
    borderWidth: dimens.xs,
  },
  stripText: {
    fontSize: fonts.xxl,
    textAlign: 'center',
    color: Colors.ivory,
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
  paddedContainer: {
    ...baseStyles.containerBase,
    padding: dimens.l,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: Colors.darkYellow,
    backgroundColor: Colors.yellow,
    textAlign: 'center',
    fontSize: fonts.xxxl,
    fontWeight: 'bold',
    padding: dimens.m,
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
    fontSize: fonts.xl,
    ...baseStyles.button,
  },
  secondaryButton: {
    backgroundColor: Colors.yellow,
    borderColor: Colors.darkYellow,
    fontSize: fonts.l,
    ...baseStyles.button,
  },
  smallImg: {
    width: dimens.smallImg,
    height: dimens.smallImg,
    resizeMode: 'center',
  },
  mediumImg: {
    width: dimens.mediumImg,
    height: dimens.mediumImg,
    resizeMode: 'center',
  },
  largeImg: {
    width: dimens.largeImg,
    height: dimens.largeImg,
    resizeMode: 'center',
    alignSelf: 'center',
    margin: dimens.l,
  },
  listDividerLine: {
    height: dimens.s,
    backgroundColor: Colors.softBlue,
  },
  listDividerSpace: {
    height: dimens.m,
    backgroundColor: Colors.transparent,
  },
  personList: {
    margin: dimens.l,
  },
  personCard: {
    backgroundColor: Colors.white,
    borderRadius: dimens.l,
    overflow: 'hidden',
    padding: dimens.l,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personCardPic: {
    width: dimens.avatarImg,
    height: dimens.avatarImg,
    borderRadius: dimens.avatarImgRadius,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  personCardTextContainer: {
    marginLeft: dimens.xl,
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
  textInputStandart: {
    padding: dimens.m,
    backgroundColor: Colors.white,
    borderColor: Colors.darkGray,
    borderWidth: dimens.xxs,
  },
  orderStripTextNotHurry: {
    ...baseStyles.stripText,
    backgroundColor: Colors.green,
  },
  orderStripTextHurry: {
    ...baseStyles.stripText,
    backgroundColor: Colors.red,
  },
});

export default StyleSheets;
