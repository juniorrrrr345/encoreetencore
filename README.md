
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

1. Ouvrez votre navigateur sur `http://localhost:3000`
2. Parcourez les produits sur la page d'accueil
3. Cliquez sur un produit pour voir ses détails
4. Sélectionnez une quantité et utilisez les boutons de commande

## Structure du projet

- `server.js` : Serveur Express avec API
- `public/index.html` : Interface utilisateur complète
- `product.model.js` : Modèle de données pour les produits
- `package.json` : Configuration et dépendances

## API Routes

- `GET /` : Page d'accueil
- `GET /api/products` : Liste tous les produits
- `GET /api/products/:id` : Détails d'un produit spécifique

## Personnalisation

Vous pouvez modifier les produits en éditant le tableau `sampleProducts` dans `server.js` ou en connectant une base de données MongoDB.

## Technologies utilisées

- **Backend** : Node.js, Express, MongoDB
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Styling** : CSS moderne avec backdrop-filter et gradients
- **Responsive** : Design adaptatif pour mobile et desktop
