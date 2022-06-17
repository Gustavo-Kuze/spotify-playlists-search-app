import MainNavigator from './screens';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function App() {

  const theme = extendTheme({
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
