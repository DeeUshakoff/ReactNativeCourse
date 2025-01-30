import {Animated, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useRootStore} from '../../../hooks/useRootStore.ts';
import {CommonStyles} from '@components/CommonStyles.tsx';
import ItemModel from '@modules/homework-12/ItemModel.ts';
import ScrollView = Animated.ScrollView;
import {observer} from 'mobx-react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Button from '@components/Button.tsx';
import {Icon} from 'react-native-elements';

export const Homework12Screen = observer(
  ({navigation}: NativeStackScreenProps<any>) => {
    const {apiStore} = useRootStore();
    useEffect(() => {
      (async function () {
        await apiStore.getItems();
      })();

      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={async () => {
              await apiStore.delete();
            }}
            children={<Icon color={'white'} name={'delete'} />}
            title="Add"
          />
        ),
      });
    }, [navigation, apiStore]);

    const onRefresh = React.useCallback(async () => {
      await apiStore.refresh();
    }, [apiStore]);

    const renderItem = (item: ItemModel) => (
      <View key={item.date} style={styles.forecastContainer}>
        <Text>{item.date}</Text>
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
    console.log(apiStore.items);
    return (
      <View style={CommonStyles.padding8}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={apiStore.isLoading}
              onRefresh={onRefresh}
            />
          }>
          {sections.length > 0 ? (
            sections.map(section => {
              return (
                <View key={section.title}>
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
            })
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.valueLabel}>Empty :(</Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  },
);

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
  emptyContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 500,
  },
});
