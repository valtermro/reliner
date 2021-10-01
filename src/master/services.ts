import { App } from './App';

const apps: App[] = [];

const appInstallerContext = {
  addApp(app: App) {
    apps.push(app);
  }
};

interface AppInstaller {
  install: (ctx: AppInstallerContext) => Promise<void>;
}

export interface AppInstallerContext {
  addApp: (app: App) => void;
}

export async function installApps(appInstallers: Promise<AppInstaller>[]) {
  const installers = await Promise.all(appInstallers);

  await Promise.all(installers.map(p => p.install(appInstallerContext)));

  return apps.slice(0);
}