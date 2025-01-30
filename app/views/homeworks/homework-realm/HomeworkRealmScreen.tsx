import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  TextInput,
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import News from '@modules/news/News';
import {useRootStore} from '@hooks/useRootStore.ts';
import Button from '@components/Button.tsx';
import {CommonStyles} from '@components/CommonStyles.tsx';

export const HomeworkRealmScreen = observer(() => {
  const {newsStore} = useRootStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNews, setEditingNews] = useState<News | null>(null);

  useEffect(() => {
    newsStore.getNews();
  }, [newsStore]);

  const handleCreateOrUpdateNews = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Validation Error', 'Title and content must not be empty.');
      return;
    }

    if (editingNews) {
      newsStore.updateNews(editingNews, {title, content});
      setEditingNews(null);
    } else {
      const newNews = {id: Date.now().toString(), title, content} as News; // Добавление уникального id
      newsStore.createNews(newNews);
    }
    setTitle('');
    setContent('');
  };

  const handleEditNews = (news: News) => {
    setEditingNews(news);
    setTitle(news.title);
    setContent(news.content);
  };

  const handleDeleteNews = (news: News) => {
    Alert.alert('Delete News', 'Delete this news?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        onPress: () => newsStore.deleteNews(news),
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.newsEditContainer}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          style={styles.input}
        />
        <Button
          title={editingNews ? 'Update' : 'Create'}
          onPress={handleCreateOrUpdateNews}
          disabled={newsStore.isLoading}
        />
      </View>

      {newsStore.isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsStore.news}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.newsRenderItemContainer}>
              <Text style={styles.newsRenderItemTitle}>{item.title}</Text>
              <Text>{item.content}</Text>
              <View style={styles.newsRenderItemButtonGroupContainer}>
                <Button title="Edit" onPress={() => handleEditNews(item)} />
                <Button title="Delete" onPress={() => handleDeleteNews(item)} />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
  newsEditContainer: {
    marginBottom: 16,
    gap: 8,
  },
  newsRenderItemContainer: {
    padding: 16,
    gap: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
  newsRenderItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsRenderItemButtonGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
