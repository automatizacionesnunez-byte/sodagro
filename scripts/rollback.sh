#!/bin/bash
set -euo pipefail

echo "=== WEBS Factory: Corporate Rollback Script ==="

read -p "Usuario del servidor: " SERVER_USER
read -p "IP o hostname del servidor: " SERVER_HOST
read -p "Ruta de despliegue (ej. /var/www/empresa): " DEPLOY_PATH
read -p "Commit al que revertir (SHA o HEAD~1): " TARGET_COMMIT

echo "Revirtiendo a ${TARGET_COMMIT}..."

ssh "${SERVER_USER}@${SERVER_HOST}" <<EOF
  cd ${DEPLOY_PATH}
  git checkout ${TARGET_COMMIT}
  git pull origin \$(git rev-parse --abbrev-ref HEAD)
  npm ci
  npm run build
  pm2 restart empresa
  echo "✅ Rollback corporativo completado a ${TARGET_COMMIT}"
EOF