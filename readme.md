# LinkStache
A serverless and buildless "stache" for all your links

## Overview
This is a small LinkTree clone that utilizes [Mustache.js](https://github.com/janl/mustache.js/) templating for the layout and style.
It can be set up entirely in GitHub and your browser.
The `index.html` file can be served directly or compiled via GitHub Actions.

All data for the site is contained in a single `data.json` file with a defined [JSON schema](https://json-schema.org/).
Use of the schema 1) allows users to ensure data is formatted correctly and 2) provides an instant GUI editor via [JSON Editor](https://github.com/json-editor/json-editor).

You can see an example using this repository on Github Pages: https://jacobgb24.github.io/LinkStache/

<p align="center">
  <a href="https://jacobgb24.github.io/LinkStache/">
    <img width=600 src="https://imgur.com/dprHxKk.png"/>
  </a>
 </p>

## Setting up a website with just GitHub and your browser
1. Fork this repository or use it as a template
1. Set up [GitHub Pages](https://docs.github.com/en/pages/quickstart) for your repository
    * In your repository's settings, enable Github Pages. 
    * You may select the source as either your root directory or via GitHub Actions. 
    * Github Actions should generally result in better performance when visiting the site.
1. Once set up, navigate to `<your-site>/gui_editor.html` in your browser. You should see an editor like below
1. Fill out all of the fields and customize the style as you want
1. Click "Copy Data to Clipboard"
1. Return to the GitHub repository and click the `data.json` file
1. Edit the file, replace it with the contents of your clipboard, then commit
1. Your site should be updated

Repeat steps 3+ for any future updates. Your current site data will show in the editor

<p align="center">
  <a href="https://jacobgb24.github.io/LinkStache/gui_editor.html">
    <img width=600 src="https://i.imgur.com/ijfEJJx.png"/>
  </a>
 </p>
 
## Features
* Profile picture, name, and bio
* Support for links and section headers
* Additional support for text, image, and html blocks
* Customizable style similar to what LinkTree's free version offers. (See the schema for what can be customized.)
* GUI Editor with live preview
* Compilation/minification handled by Github Actions
