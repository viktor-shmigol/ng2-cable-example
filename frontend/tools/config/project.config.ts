import { join } from 'path';
import { argv } from 'yargs';
const proxy = require('proxy-middleware');

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    this.PLUGIN_CONFIGS['browser-sync'] = {
      middleware: [
        proxy({
          protocol: 'http:',
          hostname: 'localhost',
          port: 3000,
          pathname: '/api',
          route: '/api'
        }),
        proxy({
          protocol: 'http:',
          hostname: 'localhost',
          port: 3000,
          pathname: '/admin',
          route: '/admin'
        }),
        require('connect-history-api-fallback')({index: `${this.APP_BASE}index.html`})
      ],
      port: this.PORT,
      startPath: this.APP_BASE,
      open: argv['b'] ? false : true,
      injectChanges: false,
      server: {
        baseDir: `${this.DIST_DIR}/empty/`,
        routes: {
          [`${this.APP_BASE}${this.APP_SRC}`]: this.APP_SRC,
          [`${this.APP_BASE}${this.APP_DEST}`]: this.APP_DEST,
          [`${this.APP_BASE}node_modules`]: 'node_modules',
          [`${this.APP_BASE.replace(/\/$/, '')}`]: this.APP_DEST
        }
      }
    };
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];
    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }
}
