// API endpoint pour les images placeholder - Compatible Vercel
export default function handler(req, res) {
  // Activer CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query } = req;
  const { params } = query;

  switch (method) {
    case 'GET':
      // Générer une image SVG placeholder simple
      const [width = '300', height = '200'] = params || ['300', '200'];
      
      const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#333;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#555;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="#999" font-family="Arial, sans-serif" font-size="14">
            Image du produit
          </text>
          <text x="50%" y="60%" text-anchor="middle" dy="0.35em" fill="#666" font-family="Arial, sans-serif" font-size="12">
            ${width}x${height}
          </text>
        </svg>
      `;

      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      return res.status(200).send(svg);
    
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}