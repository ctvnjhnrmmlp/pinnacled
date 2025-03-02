import VARIABLES from '@/configurations/variables';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: VARIABLES.name,
    short_name: VARIABLES.nameConfig,
    description: VARIABLES.info,
    start_url: '/',
    display: 'standalone',
    background_color: VARIABLES.theme,
    theme_color: VARIABLES.theme,
    // icons: [
    // 	{
    // 		src: '/images/',
    // 		sizes: '192x192',
    // 		type: 'image/png',
    // 	},
    // 	{
    // 		src: '/images/',
    // 		sizes: '512x512',
    // 		type: 'image/png',
    // 	},
    // ],
  };
}

// {
//     "theme_color": "#202020",
//     "background_color": "#000000",
//     "display": "standalone",
//     "scope": "/",
//     "start_url": "/",
//     "name": "BFS Auction",
//     "short_name": "BFS Auction",
//     "description": "BFS Auction",
//     "icons": [
//         {
//             "src": "/icon-192x192.png",
//             "sizes": "192x192",
//             "type": "image/png"
//         },
//         {
//             "src": "/icon-256x256.png",
//             "sizes": "256x256",
//             "type": "image/png"
//         },
//         {
//             "src": "/icon-384x384.png",
//             "sizes": "384x384",
//             "type": "image/png"
//         },
//         {
//             "src": "/icon-512x512.png",
//             "sizes": "512x512",
//             "type": "image/png"
//         }
//     ]
// }
