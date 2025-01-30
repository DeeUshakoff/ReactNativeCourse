import {observer} from 'mobx-react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LangType} from '@modules/lang/LangType.ts';
import {useTranslation} from 'react-i18next';
import {LangStore} from '@modules/lang/LangStore.ts';
import {Separator} from '@components/Separator.tsx';
import Button from '@components/Button.tsx';

const langStore = new LangStore();

export const HomeworkMultilangScreen = observer(() => {
  const {t} = useTranslation();

  const handleChangeLanguage = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('common.header')}</Text>
      <Text>{t('common.text')}</Text>
      <Button title={t('common.help')} />

      <Separator/>
      <Button onPress={handleChangeLanguage} title={t('common.changeLang')}/>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
    flexDirection: 'column',
  },
});
