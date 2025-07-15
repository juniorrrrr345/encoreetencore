// API pour gérer un produit spécifique (PUT et DELETE)
// Utilise les fonctions partagées pour la cohérence des données
import { getProductById, updateProduct, deleteProduct } from '../../../lib/data.js';

export default function handler(req, res) {
  // Activer CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query } = req;
  const { id } = query;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ error: 'ID du produit invalide' });
  }

  switch (method) {
    case 'GET':
      // Retourner un produit spécifique
      const product = getProductById(id);
      if (!product) {
        return res.status(404).json({ error: 'Produit non trouvé' });
      }
      return res.status(200).json(product);

    case 'PUT':
      // Mettre à jour un produit
      try {
        const updatedProduct = updateProduct(id, req.body);
        
        if (!updatedProduct) {
          return res.status(404).json({ error: 'Produit non trouvé' });
        }
        
        return res.status(200).json(updatedProduct);
      } catch (error) {
        return res.status(400).json({ error: 'Données invalides' });
      }

    case 'DELETE':
      // Supprimer un produit
      const success = deleteProduct(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Produit non trouvé' });
      }
      
      return res.status(200).json({ message: 'Produit supprimé avec succès' });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}