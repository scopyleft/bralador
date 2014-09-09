# Bralador
> His Master's voice

Bralador is a dead simple viewer to publish your inspired posts in markdown.

View a demo at [http://bralador.meteor.com](http://bralador.meteor.com).

## Installation

Fork the contribution package :
> git@github.com:scopyleft/bralador-contribution.git

Open a terminal:
```bash
$ curl https://install.meteor.com | /bin/sh
$ cd ~
$ git clone git@github.com:scopyleft/bralador.git
$ cd bralador
$ git clone git@github.com:pointbar/bralador-contribution.git packages/contribution
$ cp private/_infos.json.sample private/_infos.json
$ meteor
```

Open http://localhost:3000 in your browser.

## Configure infos

Open *private/_infos.json* file

* "name": Name of your product, it appear in top left corner
* "title": Window name
* "menu_title": Title of posts menu

* "staging": Meteor project name, it's deploy on : name.meteor.com
* "prod": Domain name of production environment


## Writing posts

[README](https://github.com/scopyleft/bralador-contribution/blob/master/README.md)

## Deploy your website

### Lazy deploy

Just launch deploy script :
$ ./deploy

The script try to actualize github environment.
In second time, it tries to deploy on staging and production environment.

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
