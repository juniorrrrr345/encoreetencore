
# HASHTAG BOT - Boutique en ligne

Une boutique en ligne moderne avec le style de l'application mobile HASHTAG BOT. Cette application reproduit fidèlement l'interface et les fonctionnalités montrées dans l'application mobile originale.

## Fonctionnalités

- **Interface moderne** : Design sombre avec effets de flou (backdrop-filter)
- **Grille de produits** : Affichage en grille responsive des produits
- **Filtres** : Filtres par catégorie et par farm
- **Modal de détails** : Popup avec détails complets du produit
- **Grille de prix** : Options de prix multiples (25g, 50g, 100g, etc.)
- **Boutons de commande** : Intégration Telegram et Snapchat
- **Navigation** : Menu de navigation fixe en bas
- **Panel d'administration** : Interface séparée pour gérer les produits

## Installation

1. Cloner le repository
2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env` avec vos configurations :
```
MONGO_URI=mongodb://localhost:27017/hashtag-bot
PORT=3000
```

4. Démarrer le serveur :
```bash
npm start
```

Ou en mode développement :
```bash
npm run dev
```

## Utilisation

### Boutique (Public)
1. Ouvrez votre navigateur sur `http://localhost:3000`
2. Parcourez les produits sur la page d'accueil
3. Cliquez sur un produit pour voir ses détails
4. Sélectionnez une quantité et utilisez les boutons de commande

### Panel d'Administration
1. Accédez au panel sur `http://localhost:3000/admin.html`
2. Gérez vos produits (ajouter, modifier, supprimer)
3. Consultez les statistiques en temps réel
4. Les modifications sont automatiquement synchronisées avec la boutique

📖 **Documentation complète** : Consultez [ADMIN_PANEL.md](./ADMIN_PANEL.md)

## Structure du projet

- `server.js` : Serveur Express avec API
- `public/index.html` : Interface utilisateur boutique
- `public/admin.html` : Panel d'administration
- `api/` : Fonctions API Vercel
  - `products.js` : API publique des produits
  - `products/[id].js` : API produit spécifique
  - `admin/products.js` : API d'administration
  - `admin/products/[id].js` : API admin produit spécifique
  - `placeholder/[...params].js` : Générateur d'images
- `lib/data.js` : Données partagées
- `package.json` : Configuration et dépendances

## API Routes

### API Publique
- `GET /` : Page d'accueil de la boutique
- `GET /admin.html` : Panel d'administration
- `GET /api/products` : Liste tous les produits
- `GET /api/products/:id` : Détails d'un produit spécifique
- `GET /api/placeholder/:width/:height` : Images placeholder

### API d'Administration
- `GET /api/admin/products` : Liste tous les produits (admin)
- `POST /api/admin/products` : Ajouter un nouveau produit
- `PUT /api/admin/products/:id` : Modifier un produit
- `DELETE /api/admin/products/:id` : Supprimer un produit

## Personnalisation

### Via Panel d'Administration (Recommandé)
1. Accédez au panel sur `/admin.html`
2. Utilisez l'interface graphique pour gérer vos produits
3. Toutes les modifications sont automatiquement synchronisées

### Via Code (Développement)
1. Modifiez les données dans `lib/data.js`
2. Ou connectez une base de données MongoDB
3. Redémarrez l'application pour voir les changements

### Styles et Design
- **Boutique** : Modifiez le CSS dans `public/index.html`
- **Panel Admin** : Modifiez le CSS dans `public/admin.html`
- **Thème** : Couleurs et styles cohérents entre les deux interfaces

## Technologies utilisées

- **Backend** : Node.js, Express, MongoDB
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Styling** : CSS moderne avec backdrop-filter et gradients
- **Responsive** : Design adaptatif pour mobile et desktop
- **Déploiement** : Optimisé pour Vercel avec fonctions serverless

## Déploiement sur Vercel

### Déploiement rapide

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvotre-username%2Fvotre-repo)

### Déploiement manuel

1. Forkez ce repository
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project" et importez votre fork
4. Déployez automatiquement

### Configuration Vercel

Le projet inclut :
- `vercel.json` : Configuration pour les fonctions serverless
- `api/` : Fonctions API optimisées pour Vercel
- `public/` : Fichiers statiques servis par CDN

Pour plus de détails, consultez [DEPLOYMENT.md](./DEPLOYMENT.md)

## Développement local vs Production

### Local (Express)
```bash
npm install
npm start
# Accès : http://localhost:3000
```

### Production (Vercel)
```bash
npm install -g vercel
vercel
# Accès : https://votre-app.vercel.app
```
