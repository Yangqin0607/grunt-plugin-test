# pluginTest-cyq

> create grunt plugin for the first time

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install pluginTest-cyq --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('pluginTest-cyq');
```

## The "pluginTest_cyq" task

### Overview
In your project's Gruntfile, add a section named `pluginTest_cyq` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pluginTest_cyq: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `'dog'`

A string value that is used to name the file;

#### options.commentSymbol
Type: `String`
Default value: `'//'`

A string value that is used to define the symbol for comment.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  pluginTest_cyq: {
    options: {
      "who":"dog",
      "commentSymbol":"//"
    },
    dist:["example/*.js"]
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2016-11-17&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;init

## License
Copyright (c) 2016 Ailsa. Licensed under the MIT license.
