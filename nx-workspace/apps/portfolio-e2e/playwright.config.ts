import type { PlaywrightTestConfig } from '@playwright/test';
import  {  devices } from '@playwright/test';


import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};



export default config;