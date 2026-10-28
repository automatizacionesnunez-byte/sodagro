#!/bin/bash
set -euo pipefail

echo "=== WEBS Factory: VPS Setup Script (Corporate) ==="
echo ""

read -p "Dominio del sitio (ej. https://empresa.com): " SITE_URL
read -p "Usuario del servidor: " SERVER_USER
read -p "IP o hostname del servidor: " SERVER_HOST
read -p "Ruta de despliegue en el servidor (ej. /var/www/empresa): " DEPLOY_PATH

echo ""
echo "Configurando servidor corporativo..."
echo "  Sitio: $SITE_URL"
echo "  Servidor: $SERVER_USER@$SERVER_HOST"
echo "  Ruta: $DEPLOY_PATH"

ssh "${SERVER_USER}@${SERVER_HOST}" <<EOF
  sudo apt-get update -y
  sudo apt-get install -y nginx nodejs npm certbot python3-certbot-nginx
  sudo npm install -g pm2
  sudo mkdir -p ${DEPLOY_PATH}
  sudo chown -R \${USER}:\${USER} ${DEPLOY_PATH}
  sudo sed -i 's|\$DOMAIN|$(echo "$SITE_URL" | sed 's|https://||')|g' /etc/nginx/nginx.conf
  sudo nginx -t && sudo systemctl reload nginx
  sudo certbot --nginx -d $(echo "$SITE_URL" | sed 's|https://||') --non-interactive --agree-tos --register-unsafely-without-email --redirect || true
  echo "✅ Servidor corporativo configurado"
EOF

echo ""
echo "Ejecuta 'bash scripts/deploy.sh' para desplegar."