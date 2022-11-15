# LinkStache
A "stache" for all your links

## Overview
This is a small static LinkTree clone that utilizes [Mustache.js](https://github.com/janl/mustache.js/) templating for the layout and style.
All data for the site is contained in a single `data.json` file with a defined [JSON schema](https://json-schema.org/).
Use of the schema 1) allows users to ensure data is formatted correctly and 2) provides an instant GUI editor via [JSON Editor](https://github.com/json-editor/json-editor).


## Usage
This repository can be easily forked (or used as a template) to create your own site.
Only `data.json` needs to be edited.
This can be done with a text editor or by opening `_builder.html` in your browser.

## Features
* Profile picture, name, and bio
* Support for links with icons
* Section headers
* Customizable style similar to what LinkTree's free version offers. (See the schema for what can be customized.)