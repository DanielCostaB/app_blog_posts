import { registerRootComponent } from 'expo';
import { NativeBaseProvider, extendTheme } from "native-base";

import App from './App';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#ff7961',
      500: '#f44336',
      900: '#ba000d',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
});

const WrappedApp = () => (
  <NativeBaseProvider theme={theme}>
      <App />
  </NativeBaseProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(WrappedApp);
