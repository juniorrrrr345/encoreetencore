// Données partagées pour toutes les API
// Base de données en mémoire compatible avec Vercel

let productsData = [
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

// Fonction pour lire les produits
export function getProducts() {
  return [...productsData];
}

// Fonction pour obtenir un produit par ID
export function getProductById(id) {
  return productsData.find(p => p.id === parseInt(id));
}

// Fonction pour ajouter un nouveau produit
export function addProduct(product) {
  const newId = productsData.length > 0 ? Math.max(...productsData.map(p => p.id)) + 1 : 1;
  const newProduct = {
    id: newId,
    ...product,
    badges: product.badges || []
  };
  productsData.push(newProduct);
  return newProduct;
}

// Fonction pour mettre à jour un produit
export function updateProduct(id, updates) {
  const index = productsData.findIndex(p => p.id === parseInt(id));
  if (index === -1) return null;
  
  const updatedProduct = {
    ...productsData[index],
    ...updates,
    id: parseInt(id)
  };
  
  productsData[index] = updatedProduct;
  return updatedProduct;
}

// Fonction pour supprimer un produit
export function deleteProduct(id) {
  const index = productsData.findIndex(p => p.id === parseInt(id));
  if (index === -1) return false;
  
  productsData.splice(index, 1);
  return true;
}

// Fonction pour réinitialiser les données (utile pour les tests)
export function resetData() {
  productsData = [
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
}