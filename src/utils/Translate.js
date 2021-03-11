import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

const tr = {
  orderList: 'Sipariş Listesi',
  addItem: 'Eleman Ekle',
  isHurry: 'Acele mi?',
  clearAllItems: 'Tüm Elemanları Sil',
  orderItemsCount: 'Sipariş Elemanı Sayısı: ',
  personList: 'Kişi Listesi',
  pictures: 'Resimler',
  uiExamples: 'Ui Örnekleri',
  localNote: 'Yerel Not',
  settings: 'Ayarlar',
};

const en = {
  orderList: 'Order List',
  addItem: 'Add Item',
  isHurry: 'Is Hurry?',
  clearAllItems: 'Clear All Items',
  orderItemsCount: 'Order Items Count: ',
  personList: 'Person List',
  pictures: 'Pictures',
  uiExamples: 'Ui Examples',
  localNote: 'Local Note',
  settings: 'Settings',
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
