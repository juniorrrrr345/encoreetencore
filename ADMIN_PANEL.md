# Panel Administrateur - HASHTAG BOT

Panel d'administration moderne et intuitif pour gérer les produits de votre boutique en ligne.

## 🎯 Accès au Panel

- **URL locale**: `http://localhost:3000/admin.html`
- **URL Vercel**: `https://votre-app.vercel.app/admin.html`

## 🚀 Fonctionnalités

### Dashboard Principal
- **Statistiques en temps réel** : Nombre total de produits, catégories, prix moyen
- **Vue d'ensemble** : Aperçu rapide de tous les produits
- **Navigation intuitive** : Lien direct vers la boutique

### Gestion des Produits

#### ➕ Ajouter un Produit
1. Cliquez sur **"Ajouter un produit"**
2. Remplissez le formulaire :
   - **Nom** : Nom du produit (requis)
   - **Catégorie** : Catégorie du produit (requis)
   - **Badge** : Badge affiché sur la carte
   - **Variété** : Variété/strain du produit
   - **Description** : Description détaillée
   - **Prix** : Grille de prix (gram/prix)
3. Cliquez sur **"Ajouter"**

#### ✏️ Modifier un Produit
1. Cliquez sur **"Modifier"** sur la carte du produit
2. Modifiez les champs souhaités
3. Cliquez sur **"Modifier"**

#### 🗑️ Supprimer un Produit
1. Cliquez sur **"Supprimer"** sur la carte du produit
2. Confirmez la suppression
3. Le produit est supprimé définitivement

### Gestion des Prix
- **Prix multiples** : Ajoutez plusieurs options de prix
- **Format flexible** : Ex: 25g, 50g, 100g, 200g, etc.
- **Ajout/Suppression** : Boutons pour ajouter/supprimer des prix

## 🛠️ APIs d'Administration

### Endpoints Disponibles

#### Products Management
- `GET /api/admin/products` - Liste tous les produits
- `POST /api/admin/products` - Ajouter un produit
- `PUT /api/admin/products/{id}` - Modifier un produit
- `DELETE /api/admin/products/{id}` - Supprimer un produit

#### Product Details
- `GET /api/admin/products/{id}` - Détails d'un produit
- `PUT /api/admin/products/{id}` - Modifier un produit spécifique
- `DELETE /api/admin/products/{id}` - Supprimer un produit spécifique

### Structure des Données

```json
{
  "id": 1,
  "name": "Nom du produit",
  "category": "Catégorie",
  "badge": "Badge affiché",
  "strain": "Variété",
  "description": "Description du produit",
  "image": "/api/placeholder/300/200",
  "prices": [
    { "gram": "25g", "price": 150 },
    { "gram": "50g", "price": 250 }
  ]
}
```

## 🔧 Développement

### Local
```bash
npm start
# Panel disponible sur http://localhost:3000/admin.html
```

### Vercel
```bash
vercel dev
# Panel disponible sur http://localhost:3000/admin.html
```

## 🎨 Interface

### Design
- **Thème sombre** : Cohérent avec la boutique
- **Interface moderne** : Effets de flou et transparence
- **Responsive** : Adapté mobile et desktop
- **Notifications** : Messages de succès/erreur

### Navigation
- **Retour boutique** : Lien direct vers la boutique
- **Actualisation** : Bouton pour recharger les données
- **Modal** : Interface d'ajout/modification intuitive

## 📊 Données

### Stockage
- **Développement** : Base de données en mémoire
- **Production** : Compatible avec MongoDB
- **Synchronisation** : Données partagées entre boutique et admin

### Persistance
- **Locale** : Données persistantes pendant la session
- **Vercel** : Données partagées entre toutes les fonctions
- **Évolutif** : Facilement extensible vers une BDD

## 🔐 Sécurité

### Recommandations
- **Accès restreint** : Limitez l'accès au panel d'administration
- **Authentification** : Ajoutez une authentification si nécessaire
- **HTTPS** : Utilisez toujours HTTPS en production

### Protection
- **CORS** : Configuré pour les requêtes cross-origin
- **Validation** : Validation des données côté serveur
- **Erreurs** : Gestion d'erreurs appropriée

## 🚀 Déploiement

### Avec Vercel
Le panel d'administration est automatiquement déployé avec la boutique :
1. Déployez votre application sur Vercel
2. Accédez à `https://votre-app.vercel.app/admin.html`
3. Gérez vos produits en temps réel

### Fichiers Importants
- `public/admin.html` : Interface d'administration
- `api/admin/products.js` : API de gestion des produits
- `api/admin/products/[id].js` : API pour produits individuels
- `lib/data.js` : Données partagées

## 📈 Évolutions Futures

### Fonctionnalités Prévues
- **Authentification** : Système de connexion
- **Upload d'images** : Téléchargement d'images produits
- **Statistiques avancées** : Analytics détaillés
- **Sauvegarde** : Export/import des données

### Intégrations
- **MongoDB** : Base de données persistante
- **Cloudinary** : Gestion d'images
- **Analytics** : Suivi des performances

## 🤝 Support

Pour toute question ou problème :
1. Consultez les logs de la console
2. Vérifiez les APIs dans l'onglet Network
3. Consultez la documentation Vercel

---

**Note** : Le panel d'administration est séparé de la boutique pour éviter tout conflit. Les données sont synchronisées automatiquement entre les deux interfaces.