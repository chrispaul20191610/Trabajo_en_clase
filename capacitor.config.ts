import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'peliculas-app',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      FadeSplashScreenDuration: '300',
      SplashScreenDelay: '10000',
      AutoHideSplashScreen: 'false',
      showSplashScreen: 'true',
      fadeSplashScreen: 'true'
    }
  }
};

export default config;
