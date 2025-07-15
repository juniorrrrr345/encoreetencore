// API endpoint pour les produits - Compatible Vercel
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

export default function handler(req, res) {
  // Activer CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query } = req;
  const { id } = query;

  switch (method) {
    case 'GET':
      if (id) {
        // Retourner un produit spécifique
        const product = sampleProducts.find(p => p.id === parseInt(id));
        if (!product) {
          return res.status(404).json({ error: 'Produit non trouvé' });
        }
        return res.status(200).json(product);
      } else {
        // Retourner tous les produits
        return res.status(200).json(sampleProducts);
      }
    
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}