// API d'administration pour les produits - Compatible Vercel
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../lib/data.js';

export default function handler(req, res) {
  // Activer CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      // Retourner tous les produits
      return res.status(200).json(getProducts());

    case 'POST':
      // Ajouter un nouveau produit
      try {
        const newProduct = addProduct(req.body);
        return res.status(201).json(newProduct);
      } catch (error) {
        return res.status(400).json({ error: 'Données invalides' });
      }

    case 'PUT':
      // Mettre à jour un produit existant
      try {
        const { id } = req.query;
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
      try {
        const { id } = req.query;
        const success = deleteProduct(id);
        
        if (!success) {
          return res.status(404).json({ error: 'Produit non trouvé' });
        }
        
        return res.status(200).json({ message: 'Produit supprimé avec succès' });
      } catch (error) {
        return res.status(400).json({ error: 'Erreur lors de la suppression' });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}