import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Routes } from '@routes/index';
import { StatusBar } from 'expo-status-bar';
import { Loading } from '@components/Loading';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import store from '@store/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='auto'
        translucent
        backgroundColor="transparent"
      />
      <Provider store={store}>
        {fontsLoaded ? <Routes/> : <Loading />}
      </Provider>
    </ThemeProvider>
  );
}
