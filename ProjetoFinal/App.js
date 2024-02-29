import { StatusBar } from 'expo-status-bar';
import Routes from './components/routes';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}

