
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/hashtag-bot', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté'))
.catch(err => console.error('Erreur de connexion MongoDB:', err));

// Données des produits simulées
const sampleProducts = [
  {
    id: 1,
    name: "La mousse ++",
    category: "MOUSSE PREMIUM",
    image: "/api/placeholder/300/200",
    badge: "JAUNE MOUSSEUX 🟨🟩",
    badges: ["🏆🏆"],
    strain: "Mousse Premium",
    description: "Mousse premium de qualité supérieure",
    prices: [
      { gram: "25g", price: 150 },
      { gram: "50g", price: 250 },
      { gram: "100g", price: 450 },
      { gram: "200g", price: 800 },
      { gram: "500g", price: 1750 },
      { gram: "1000g", price: 3400 }
    ]
  },
  {
    id: 2,
    name: "Lemon Haze 🟡🟡",
    category: "DRY-SIFT 90u 🏮🏮",
    image: "/api/placeholder/300/200",
    badge: "DRY-SIFT 90U 🏮🏮",
    badges: [],
    strain: "Lemon Haze",
    description: "90u premium feu feu 🔥🔥🔥\nCurage au top, terpènes de fou 🤤",
    prices: [
      { gram: "25g", price: 150 },
      { gram: "50g", price: 250 },
      { gram: "100g", price: 450 },
      { gram: "200g", price: 800 },
      { gram: "500g", price: 1750 },
      { gram: "1000g", price: 3400 }
    ]
  },
  {
    id: 3,
    name: "Black Farm",
    category: "DRY-SIFT 90U 🏮🏮",
    image: "/api/placeholder/300/200",
    badge: "DRY-SIFT 90U 🏮🏮",
    badges: ["⚡"],
    strain: "Black Farm",
    description: "Premium black farm strain",
    prices: [
      { gram: "25g", price: 150 },
      { gram: "50g", price: 250 },
      { gram: "100g", price: 450 }
    ]
  },
  {
    id: 4,
    name: "Amnésia Haze 🔥",
    category: "WEED NL 🇳🇱🇳🇱",
    image: "/api/placeholder/300/200",
    badge: "WEED NL 🇳🇱🇳🇱",
    badges: ["🔥"],
    strain: "Amnésia Haze",
    description: "Amnésia Haze premium des Pays-Bas",
    prices: [
      { gram: "25g", price: 120 },
      { gram: "50g", price: 200 },
      { gram: "100g", price: 380 }
    ]
  }
];

// Routes API
app.get('/api/products', (req, res) => {
  res.json(sampleProducts);
});

app.get('/api/products/:id', (req, res) => {
  const product = sampleProducts.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Produit non trouvé' });
  }
  res.json(product);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Boutique disponible sur http://localhost:${PORT}`);
});
