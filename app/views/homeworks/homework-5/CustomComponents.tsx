import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
  StyleSheet,
} from 'react-native';
import CustomButton from '@components/Button.tsx';
import ScrollView = Animated.ScrollView;

export const CustomComponents = () => (
  <View style={styles.example1Container}>
    <Box width={100} height={100} color="red" />
    <Box width={50} height={100} color="green" />
    <Box width={100} height={50} color="blue" />
  </View>
);

export const CustomComponents2 = () => {
  const [selectedColor, setSelectedColor] = React.useState<string>('red');
  const [selectedSize, setSelectedSize] = React.useState<number>(50);
  const [items, setItems] = useState<
    {id: string; size: number; color: string}[]
  >([]);

  const colorPickerItemColors = ['red', 'green', 'blue'];
  const ColorPickerItem = (props: {color: string}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedColor(props.color)}
        style={[
          styles.colorPickerItem,
          {
            backgroundColor: props.color,
          },
        ]}
      />
    );
  };

  return (
    <View style={{width: '100%', gap: 8}}>
      <ScrollView
        style={[
          styles.outlineContainer,
          {minHeight: 200, borderColor: selectedColor},
        ]}
        horizontal={true}>
        <View style={styles.example2ScrollContainer}>
          {items.map(item => (
            <CustomBox
              key={item.id}
              id={item.id}
              size={item.size}
              color={item.color}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.example2SizeInputContainer}>
        <Text>Size</Text>
        <TextInput
          style={[styles.outlineContainer, {width: 100}]}
          textAlign={'center'}
          defaultValue={'50'}
          onChangeText={text => {
            try {
              let number = Number.parseInt(text, 10);
              if (isNaN(number)) {
                number = 50;
              }
              setSelectedSize(number);
            } catch (e) {}
          }}
        />
      </View>
      <View style={styles.example2ColorPickerContainer}>
        {colorPickerItemColors.map(color => (
          <ColorPickerItem color={color} />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
        }}>
        <CustomButton
          title="Add"
          onPress={() => {
            if (selectedSize <= 0 || selectedSize > 350) {
              Alert.alert('number <= 0 || number > 350');
              return;
            }
            console.log('item_id_' + Date.now());
            setItems([
              ...items,
              {
                id: 'item_id_' + Date.now(),
                size: selectedSize,
                color: selectedColor,
              },
            ]);
          }}
        />
        <CustomButton
          style={{height: 40}}
          title="Clear"
          onPress={() => {
            setItems([]);
          }}
        />
      </View>
    </View>
  );
};

const CustomBox = (props: {size: number; color: string; id: string}) => (
  <View
    style={{
      width: props.size,
      height: props.size,
      borderRadius: 25,
      backgroundColor: props.color,
    }}
  />
);

const Box = (props: {width: number; height: number; color: string}) => (
  <View
    style={{
      width: props.width,
      height: props.height,
      backgroundColor: props.color,
      borderRadius: 25,
    }}
  />
);

const styles = StyleSheet.create({
  outlineContainer: {
    width: '100%',
    padding: 8,
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'gray',
  },
  colorPickerItem: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  example1Container: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  example2ScrollContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  example2SizeInputContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  example2ColorPickerContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
