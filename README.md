# multiBàO

Centre de ressources collaboratives.

Le site est accessible en production :
> [http://www.multibao.org](http://www.multibao.org).


## Écrire une fiche outil

Créer vos textes en [markdown](http://fr.wikipedia.org/wiki) dans le dépot [multibao-contribution](https://github.com/scopyleft/multibao-contribution)

vous pouvez également créer et gérer vos propres dépôts, contactez-nous pour plus de précisions.

## Installation de multibao

Multibao est accessible en ligne : [http://multibao.org](http://multibao.org)

C'est un projet ouvert, tu peux donc sans état d'âme :

* installer multibao chez toi à côté du radiateur
* le mettre en production sur le serveur de ta grand-mère
* modifier le code pour présenter tes supports de cours
* changer le design pour vendre des croisières à Nosy-Be
* créer un dépot et présenter toutes les recettes de l'Élysée depuis le second empire.

Il te faudra mettre un peu les mains dans le camboui :

Ouvre un terminal

Si ce n'est déjà fait, installer [Meteor](http://meteor.com) :
```bash
$ curl https://install.meteor.com | /bin/sh
```

Pour installer multiBàO en local dans ton répertoire :
```bash
$ cd ~
$ git clone https://github.com/scopyleft/multibao.git
$ cd multibao
```

Tape l'url > [http://localhost:3000](http://localhost:3000) dans ton navigateur.


## Deployer votre site

### Local
Ouvrez votre terminal :
```bash
$ cd ~/multibao
$ meteor
```

Tapez l'url > [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Pré-production
Ouvrez votre terminal :
```bash
$ cd ~/multibao
$ meteor deploy multimezig.meteor.com
```

Ouvrez > http://multimezig.meteor.com dans votre navigateur.

### Production
Achetez un nom de domaine et configurer le CNAME pour le faire pointer vers origin.meteor.com.

Ouvrez votre terminal :
```bash
$ cd ~/multibao
$ meteor deploy http://www.multimezig.com
```

## Gérer les ressources github avec JQ

> https://stedolan.github.io/jq/tutorial/

## Copyright & License

Le code source du site est sous licence : MIT.
Les données sont soumises à des licences et des droits spécifiques selon leurs origines.
