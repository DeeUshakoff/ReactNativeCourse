import {observer} from 'mobx-react';
import {Animated, StyleSheet, Switch, View} from 'react-native';
import {ThemeContext} from '@modules/theme/ThemeProvider.tsx';
import {ThemedBox} from '@components/homework-themes/ThemedBox.tsx';
import {ThemedText} from '@components/homework-themes/ThemedText.tsx';
import {useContext, useState} from 'react';
import {IColors, ThemeTypes} from '@modules/theme/ThemeTypes.ts';
import {useTheme} from '@modules/theme/hooks/useTheme.ts';
import ScrollView = Animated.ScrollView;

export const HomeworkThemesScreen = observer(() => {
  const themeContext = useContext(ThemeContext);
  const {Colors} = useTheme();
  const useStyles = (colors: IColors) =>
    StyleSheet.create({
      content: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
      },
    });
  const styles = useStyles(Colors);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    themeContext?.changeTheme(isEnabled ? ThemeTypes.LIGHT : ThemeTypes.DARK);
    setIsEnabled(previousState => !previousState);
  };
  return (
    <ScrollView style={styles.content}>
      <ThemedBox />
      <ThemedText />
      <View style={{flexDirection: 'row'}}>
        <ThemedText style={{fontFamily: 'Gilroy-Regular'}}>Dark theme</ThemedText>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </ScrollView>
  );
});
