import {observer} from 'mobx-react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from 'react-native-elements';
import {FluentIcon} from '@components/icons/FluentIcon.ts';

export const HomeworkFontsScreen = observer(() => {

  return (
      <View style={styles.content}>
        <Text style={{fontSize: 36}}>Default Roboto</Text>
        <Text style={{fontSize: 36, fontFamily: 'Gilroy-Regular'}}>Gilroy-Regular</Text>
        <Text style={{fontSize: 36, fontFamily: 'Gilroy-Bold'}}>Gilroy-Bold</Text>
        <Icon name="rocket-launch" size={30} color="#900" />
        <FluentIcon name={'ic_fluent_search_24_regular'} size={24} color={'red'} />
      </View>
  );
});

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
    text: {
      fontSize: 36,
    },
  });
