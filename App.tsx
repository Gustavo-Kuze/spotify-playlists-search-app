import MainNavigator from './screens';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function App() {

  const theme = extendTheme({
    colors: {
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <Provider store={configureStore} >
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <MainNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
