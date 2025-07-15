# Déploiement sur Vercel

Ce guide vous explique comment déployer votre boutique HASHTAG BOT sur Vercel.

## Configuration requise

- Un compte Vercel (gratuit sur [vercel.com](https://vercel.com))
- Un repository Git (GitHub, GitLab, ou Bitbucket)

## Structure du projet pour Vercel

```
/
├── api/
│   ├── products.js           # API pour tous les produits
│   ├── products/
│   │   └── [id].js          # API pour un produit spécifique
│   └── placeholder/
│       └── [...params].js    # API pour images placeholder
├── public/
│   └── index.html           # Interface utilisateur
├── vercel.json              # Configuration Vercel
└── package.json
```

## Déploiement automatique

### 1. Via l'interface Vercel

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository
4. Vercel détecte automatiquement les paramètres
5. Cliquez sur "Deploy"

### 2. Via CLI Vercel

```bash
# Installer la CLI Vercel
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer le projet
vercel

# Pour un déploiement en production
vercel --prod
```

## Variables d'environnement

Sur Vercel, ajoutez les variables d'environnement suivantes :

1. Allez dans votre projet sur Vercel
2. Cliquez sur "Settings"
3. Allez dans "Environment Variables"
4. Ajoutez :
   - `TELEGRAM_BOT_TOKEN` (optionnel)
   - `SNAPCHAT_USERNAME` (optionnel)
   - `TELEGRAM_USERNAME` (optionnel)

## Fonctionnalités Vercel

- **Déploiement automatique** : Chaque push sur la branche principale déclenche un déploiement
- **Aperçus** : Chaque pull request crée un aperçu unique
- **Fonctions serverless** : Les API sont automatiquement converties en fonctions serverless
- **CDN global** : Votre site est servi depuis le monde entier
- **HTTPS automatique** : SSL gratuit et automatique

## URLs d'API

Une fois déployé, vos API seront disponibles aux URLs suivantes :

- `https://votre-domaine.vercel.app/api/products` - Liste des produits
- `https://votre-domaine.vercel.app/api/products/1` - Produit spécifique
- `https://votre-domaine.vercel.app/api/placeholder/300/200` - Image placeholder

## Domaine personnalisé

1. Dans votre projet Vercel, allez dans "Settings"
2. Cliquez sur "Domains"
3. Ajoutez votre domaine personnalisé
4. Configurez les DNS selon les instructions

## Surveillance et Analytics

Vercel fournit :
- Logs des fonctions en temps réel
- Métriques de performance
- Analytics du site web
- Alertes d'erreur

## Optimisations

Le projet est optimisé pour Vercel avec :
- Fonctions serverless pour les API
- Mise en cache des ressources statiques
- Compression automatique
- CDN global

## Dépannage

### Erreurs communes

1. **Fonction timeout** : Augmentez `maxDuration` dans `vercel.json`
2. **Erreur 404** : Vérifiez les routes dans `vercel.json`
3. **CORS** : Headers CORS configurés dans chaque fonction API

### Logs

Consultez les logs en temps réel :
```bash
vercel logs [deployment-url]
```

## Support

- [Documentation Vercel](https://vercel.com/docs)
- [Support Vercel](https://vercel.com/support)
- [Community Discord](https://discord.gg/vercel)