# Story Container Switcher

<!-- Badges -->
<span class="badge-npmversion"><a href="https://www.npmjs.com/package/storybook-addon-story-container-switcher" title="View this project on NPM"><img src="https://img.shields.io/npm/v/storybook-addon-story-container-switcher?color=%232980b9" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://www.npmjs.com/package/storybook-addon-story-container-switcher" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/storybook-addon-story-container-switcher.svg" alt="NPM downloads" /></a></span>
<span class="badge-npmversion"><a href="https://www.npmjs.com/package/storybook-addon-story-container-switcher" title="View this project on NPM"><img src="https://img.shields.io/bundlephobia/min/storybook-addon-story-container-switcher.svg" alt="bundle size" /></a></span>
<span class="badge-npmversion"><a href="https://www.npmjs.com/package/storybook-addon-story-container-switcher" title="View this project on NPM"><img src="https://img.shields.io/npm/l/storybook-addon-story-container-switcher" alt="MIT license" /></a></span>

A Storybook plugin that allows you to view your stories inside different container components like Modal, Dialog, Drawer or even better — all at once. 

## Demo

[Live example](https://storybook-addon-story-container-switcher.vercel.app/) |
[Example repository](https://github.com/hco/storybook-test/)

https://user-images.githubusercontent.com/28081510/169690828-11dc284b-5500-4ee9-ae01-4feb73ff453d.mp4


## Installation

Install the following npm module:

```shell
npm i --save-dev storybook-addon-story-container-switcher
```
or with yarn:
```shell
yarn add -D storybook-addon-story-container-switcher
```

## Configuration

You need to configure the plugin before it can be used in the Storybook.

1. Add the addon to the addons list in `.storybook/main.js`

    ```js
    module.exports = {
        addons: [
            // all other addons
            'storybook-addon-story-container-switcher'
        ]
    };
    ```

2. Add the parameters to the `.storybook/preview.js`
    ```js
    export const parameters = {
      storyContainers: [
        {
          id: "modal",
          label: "Modal",
          container: YourFavoriteModal
        },
        // more containers
      ]
    }
    ```
