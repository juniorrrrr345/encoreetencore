// API endpoint pour un produit spécifique - Compatible Vercel
import { getProductById } from '../../lib/data.js';

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
      const product = getProductById(id);
      if (!product) {
        return res.status(404).json({ error: 'Produit non trouvé' });
      }
      return res.status(200).json(product);
    
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}