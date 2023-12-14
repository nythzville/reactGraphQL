import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'r1-ts',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
