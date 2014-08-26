# Bralador
> His Master's voice

Bralador is a dead simple viewer to publish your inspired posts in markdown.

View a demo at [http://bralador.meteor.com](http://bralador.meteor.com).

## Installation

Open a terminal:
```bash
$ curl https://install.meteor.com | /bin/sh
$ cd ~
$ git clone git@github.com:scopyleft/bralador.git
$ cd bralador
$ sudo -H npm install -g meteorite
$ mrt update
$ mrt run
```

Open http://localhost:3000 in your browser.
    
## Writing posts

* Set the global information in /private/infos.js.
* Place your markdown document in /private folder.
* Set your metadatas for each document /private/metadata.js.

## Deploy your website

### Local
Open a terminal:
```bash
$ cd ~/bralador-md
$ meteor
```
    
Open http://localhost:3000 in your browser.

### Staging
Open a terminal:
```bash
$ cd ~/bralador-md
$ meteor deploy myblog.meteor.com
```
    
Open http://myblog.meteor.com in your browser.

### Production
Buy a domain name and configure a CNAME to origin.meteor.com.

Open a terminal:
```bash
$ cd ~/bralador-md
$ meteor deploy http://www.myblog.com
```
    
Open your url in your browser.

## RoadMap
MMD
https://github.com/dtjm/node-multimarkdown
https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide

404

- RSS Description

## Copyright & License

MIT.
