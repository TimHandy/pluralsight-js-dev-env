# pluralsight-js-dev-env

Hide some of the messages with the -s flag. This is useful if lots of scripts running in parallel, like the npm start in package.json:

$ npm start -s


I got down to video 108 with this. It all got a bit complex too quickly for me. Don't think I'd need a lot of it yet.


## package.json

- start a script name with pre to make it happen before
- start a script name with post to make it happen after
eg. these three... 
"build": "when this gets called"
"prebuild": "this gets run first"
"postbuild": "and after 'build' has run this gets run"

The build scipts run a build and then open a distserver for testing locally that the build worked.

Run stuff in parallel from a script:
 
  `npm-run-all --parallel run-me and:me im-another-script`

  npm-run-all is a module.

This is another script js file being run:

  `"open:src": "babel-node buildScripts/srcServer.js"`

Run linter from the terminal. call this script from the start script:

  `"lint": "esw webpack.config.* src buildScripts --color"`

## NSP checks for security notifications against your versions of npm modules:

  `"security-check": "nsp check"`

## LocalTunnel is cool, it allows you to share your demo with the outside world:

  `"localtunnel": "lt --port 3000"`



## babel-node
Use babel-node to run ES6 code with node scripts

## Chalk
used with console.log statements to make coloured output in the console.

## Open
Used to open a webpage. This is used in the srcServer.js file.

## rimraf
Implements rm -rf for node.

## whatwg-fetch
Is a polyfill for fetch

## cheerio
think this might have been used in testing? didn't get that far.

## json-server and faker and json-schema-faker
For generating fake data to allow dev of front end without need for a back end.