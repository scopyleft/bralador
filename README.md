# Gymkhana

Atelier de jeux citoyens pour co-construire vos idées innovantes.

Le site est accessible en production :
> [http://www.gymkhana.fr](http://www.gymkhana.fr).


## Écrire une fiche d'atelier

Créer vos textes en [markdown](http://fr.wikipedia.org/wiki) dans le dépot [gymkhana-contenu](https://github.com/gymkhana-fr/gymkhana-contenu)

## Installation de gymkhana

Gymkhana est accessible en ligne : [http://www.gymkhana.fr](http://www.gymkhana.fr)

C'est un projet ouvert, tu peux donc sans état d'âme :

* jouer à créer des idées pas innovantes
* modifier le code pour présenter tes supports de cours
* changer le design pour vendre des hackatons aux institutions
* créer un dépot et présenter toutes les recettes de l'Élysée depuis le second empire.
* tenter de gagner un startup-weekend

Pour l'installer il te faudra mettre un peu les mains dans le camboui :

Ouvre un terminal

Si ce n'est déjà fait, installer [Meteor](http://meteor.com) :
```bash
$ curl https://install.meteor.com | /bin/sh
```

Pour installer gymkhana en local dans ton répertoire :
```bash
$ cd ~
$ git clone https://github.com/gymkhana-fr/gymkhana.git
$ cd gymkhana
```

Tape l'url > [http://localhost:3000](http://localhost:3000) dans ton navigateur.


## Deployer votre site

### Local
Ouvrez votre terminal :
```bash
$ cd ~/gymkhana
$ meteor
```

Tapez l'url > [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Pré-production
Ouvrez votre terminal :
```bash
$ cd ~/gymkhana
$ meteor deploy multimezig.meteor.com
```

Ouvrez > http://multimezig.meteor.com dans votre navigateur.

### Production
Achetez un nom de domaine et configurer le CNAME pour le faire pointer vers origin.meteor.com.

Ouvrez votre terminal :
```bash
$ cd ~/gymkhana
$ meteor deploy http://www.multimezig.com
```

## Gérer les ressources github avec JQ

> https://stedolan.github.io/jq/tutorial/

## Copyright & License

Le code source du site est sous licence : MIT.
Les données sont soumises à des licences et des droits spécifiques selon leurs origines.
