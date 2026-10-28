#!/bin/bash
set -euo pipefail

echo "=== WEBS Factory: Corporate Deploy Script ==="

read -p "Usuario del servidor: " SERVER_USER
read -p "IP o hostname del servidor: " SERVER_HOST
read -p "Ruta de despliegue (ej. /var/www/empresa): " DEPLOY_PATH
read -p "Rama a desplegar (por defecto main): " BRANCH
BRANCH=${BRANCH:-main}

echo ""
echo "Desplegando rama ${BRANCH}..."

ssh "${SERVER_USER}@${SERVER_HOST}" <<EOF
  cd ${DEPLOY_PATH}
  git fetch origin
  git checkout ${BRANCH}
  git pull origin ${BRANCH}
  npm ci
  npm run build
  pm2 restart empresa || pm2 start "npx serve dist" --name empresa
  echo "✅ Despliegue corporativo completado"
EOF