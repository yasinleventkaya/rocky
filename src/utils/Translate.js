import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

const en = {
  personList: 'Person List',
  pictures: 'Pictures',
  uiExamples: 'Ui Examples',
  localNote: 'Local Note',
  settings: 'Settings',
};

const tr = {
  personList: 'Kişi Listesi',
  pictures: 'Resimler',
  uiExamples: 'Ui Örnekleri',
  localNote: 'Yerel Not',
  settings: 'Ayarlar',
};

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
} else {
  I18n.locale = 'tr-TR';
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  tr,
};

export default I18n;
