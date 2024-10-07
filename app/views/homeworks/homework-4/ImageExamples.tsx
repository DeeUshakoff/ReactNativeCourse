import {Animated, StyleSheet, Text, View} from 'react-native';
import Image = Animated.Image;
import {CommonStyles} from '@components/CommonStyles.tsx';
import React from 'react';
import {Separator} from '@components/Separator.tsx';

const imageUrl =
  'https://img.freepik.com/free-photo/adorable-cat-lifestyle_23-2151593405.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718236800&semt=ais_user';

const putinImageUrl =
  'https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/6d28e43049c/85ff87dc8ca60ad4ea94a/1601071805_image.jpg';

const iosImageUrl =
  'https://images.macrumors.com/t/I00FSkiBU64SDTMfRlzvINueoe0=/2500x/article-new/2024/06/Generic-iOS-18-Feature-Real-Mock.jpg';

export const ImageExample1 = () => {
  return (
    <View>
      <Text style={styles.title}>Example Image 1</Text>
      <Text style={styles.title}>props: borderRadius</Text>
      <Separator />
      <Image
        height={250}
        source={{uri: imageUrl}}
        borderRadius={CommonStyles.borderRadius.borderRadius}
      />
    </View>
  );
};

export const ImageExample2 = () => {
  return (
    <View>
      <Text style={styles.title}>Example Image 2</Text>
      <Text style={styles.title}>props: resizeMode='stretch'</Text>
      <Separator />
      <Image
        height={250}
        resizeMode={'stretch'}
        source={{uri: putinImageUrl}}
        borderRadius={CommonStyles.borderRadius.borderRadius}
      />
    </View>
  );
};

export const ImageExample3 = () => {
  return (
    <View>
      <Text style={styles.title}>Example Image 2</Text>
      <Text style={styles.title}>props: blurRadius</Text>
      <Separator />
      <Image
        height={250}
        resizeMode={'cover'}
        source={{uri: iosImageUrl}}
        borderRadius={CommonStyles.borderRadius.borderRadius}
        blurRadius={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});
