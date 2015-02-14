# FAQ

## Comment insérer une contribution multibao dans mon site

Il te suffit d'insérer une balise html :

```
<section id="multibao" title="titre_de_la_publication"></section>
```

Remplace *titre_de_la_publication* par le titre de la contribution que tu souhaites afficher - ex. *cercle_excentrique*

Et d'ajouter le morceau de code suivant juste avant la balise de fermeture *body* :

```
  <script src="http://multibao.meteor.com/integration/multibao.js"></script>
</body>
```
And now enjoy it!

## Comment je récupère le titre d'une publication

Tu peux allez te promener sur les dépots de contributions - ex. https://github.com/scopyleft/multibao-contribution

Ou bien, récupérer le titre à partir de ton navigateur - ex. http://www.multibao.org/fiche/cercle_excentrique

## J'aimerais bien personnaliser l'affichage, est-ce possible ?

Si tu es prêt à mettre un peu tes mains dans le *css*, tu vas pouvoir te faire une très jolie mise en page personalisée, par exemple :

```
#multibao h1 {
  color: grey;
}

#multibao ul {
  background: #fdc;
}

#multibao p {
  background: #cdf;
}

#multibao a {
  font-size: 23px;
}
```

Dans le futur, il est possible que l'on te prépare quelques *feuilles de styles* pour te permettre ne pas trop te salir les mains.

## Si des améliorations sont effectuées sur les fiches est-ce que les mises à jour s'afficheront sur mon site ?

Et voui ! C'est beau la magie, pas vrai ?
