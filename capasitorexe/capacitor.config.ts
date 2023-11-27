import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capasitor.app",
  appName: "capasitorexe",
  webDir: "out",
  server: {
    url: "192.168.0.137:3000"
  }
};

export default config;
