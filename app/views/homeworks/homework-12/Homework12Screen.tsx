import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useRootStore} from '../../../../hooks/useRootStore.ts';
import {CommonStyles} from '@components/CommonStyles.tsx';
import ItemModel from '@modules/homework-12/ItemModel.ts';
import ScrollView = Animated.ScrollView;

export const Homework12Screen = () => {
  const {apiStore} = useRootStore();
  useEffect(() => {
    (async function () {
      await apiStore.getItems();
    })();
  }, [apiStore]);

  const renderItem = (item: ItemModel) => (
    <View key={item.date.toTimeString()} style={styles.forecastContainer}>
      <Text>{item.date.toLocaleTimeString()}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.valueLabel}>{item.temp}</Text>
        <Text> {item.weather}</Text>
      </View>

      <Text>Feels Like {item.feelsLike}</Text>
      <Text>Wind speed {item.windSpeed}</Text>
      <Text>Pressure {item.pressure}</Text>
    </View>
  );

  const sections = Object.keys(apiStore.items).map(date => ({
    title: date,
    data: apiStore.items[date],
  }));

  return (
    <View style={CommonStyles.padding8}>
      {apiStore.isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView>
          {sections.map(section => {
            return (
              <View>
                <Text style={styles.dayHeader}>{section.title}</Text>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  {apiStore.items[section.title].map((item: ItemModel) => {
                    return renderItem(item);
                  })}
                </ScrollView>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  forecastContainer: {
    width: 300,
    borderRadius: CommonStyles.borderRadius.borderRadius,
    backgroundColor: 'white',
    padding: 25,
    marginRight: 8,
    marginBottom: CommonStyles.padding8.padding,
  },
  valueLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dayHeader: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: CommonStyles.padding8.padding,
  },
});