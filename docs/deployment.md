# Despliegue

## Backend - Render
- **URL**: https://mork-api.onrender.com
- **Servicio**: Web Service (Free)
- **Root Directory**: server
- **Build Command**: npm install && npm run build
- **Start Command**: npm run start
- Se redespliega automáticamente con cada push a main

## Frontend - Vercel
- **URL**: https://mork-portfolio.vercel.app
- **Framework**: Vite (detectado automáticamente)
- Se redespliega automáticamente con cada push a main

## Variables de entorno
El frontend detecta automáticamente si está en producción
o desarrollo mediante import.meta.env.PROD y usa la URL
de la API correspondiente.