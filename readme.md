# Node Known Event Queue Processor

This is an experimental / demo / proof of concept version of the Known event
queue processor, written in Node.js.

## Usage

Configure your database settings and path to Known in the package.json.

By default, the settings are configured to talk to Known as installed with
by the vagrant package: https://github.com/mapkyca/known-vagrant

Then, run the event queue: 

```
node main.js
```
