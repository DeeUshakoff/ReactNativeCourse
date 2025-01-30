import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@modules/theme/hooks/useTheme.ts';
import {IColors} from '@modules/theme/ThemeTypes.ts';

export const ThemedBox = observer(() => {
  const {Colors} = useTheme();
  const useStyles = (colors: IColors) =>
    StyleSheet.create({
      content: {
        backgroundColor: colors.textSecondary,
        width: 100,
        height: 100,
      },
    });
  const styles = useStyles(Colors);
  return <View style={styles.content} />;
});
