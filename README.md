# Bralador
> His Master's voice

Bralador is a dead simple viewer to publish your inspired posts in markdown.

View a demo at [http://bralador.meteor.com](http://bralador.meteor.com).

## Installation

Open a terminal:
```bash
$ curl https://install.meteor.com | /bin/sh
$ cd ~
$ git clone git@github.com:pointbar/bralador-md.git
$ cd bralador-md
$ sudo -H npm install -g meteorite
$ mrt update
$ mrt run
```

Open http://localhost:3000 in your browser.
    
## Writing posts

Place your markdown document in /private folder.
Set your metadatas in /private/metadata.js.

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
    
Open http://www.myblog.com in your browser.

## Copyright & License

MIT.