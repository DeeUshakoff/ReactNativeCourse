import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {CommonStyles} from './CommonStyles.tsx';

interface CollapsibleViewProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleView: React.FC<CollapsibleViewProps> = ({title, children}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const maxHeightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2000],
  });

  const animatedStyle: ViewStyle = {
    maxHeight: maxHeightInterpolate,
    overflow: 'hidden',
  };

  return (
    <View style={[styles.container, CommonStyles.borderRadius]}>
      <TouchableWithoutFeedback onPress={toggleCollapse}>
        <View style={styles.header}>
          <Text style={CommonStyles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 8,
    backgroundColor: 'lightgray',
  },
  header: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  title: {
    fontSize: 20,
  },
});

export default CollapsibleView;
