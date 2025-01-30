export default class ThemeApiRepository {
  getTheme = async() => {
    return new Promise<{data: {theme: string}}>(resolve => {
      resolve({
        data: {
          theme: 'dark',
        },
      });
    });
  };
}
