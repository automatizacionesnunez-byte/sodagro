# Guía de mantenimiento

## Backups

Ejecutar semanalmente en el servidor:

```bash
# Backup de la base de datos (si aplica)
# Backup de archivos del sitio
tar -czf /backups/site-$(date +%Y%m%d).tar.gz /var/www/empresa/
```

Retener los últimos 4 backups y eliminar el resto.

## Seguridad

- Mantener Node.js actualizado a la versión LTS.
- Revisar `npm audit` mensualmente.
- Renovar el certificado SSL de Let's Encrypt (renovación automática por defecto).
- Mantener el firewall activo: permitir solo 80, 443 y SSH.
- No ejecutar `npm ci` como root.

## Actualizaciones de dependencias

1. Ejecutar `npm audit` para detectar vulnerabilidades.
2. Actualizar paquetes críticos: `npm update`.
3. Ejecutar `npm run verify`.
4. Hacer commit y push con mensaje de actualización.
5. Desplegar.

## Monitorización

- Verificar que el sitio responde: `curl -sI https://empresa.com`
- Comprobar logs de PM2: `pm2 logs empresa`
- Revisar errores 404 y 500 en los logs de Nginx.
- Configurar alertas de uptime si hay monitorización externa.

## Rollback

Si un despliegue causa problemas:

```bash
bash scripts/rollback.sh
```

Introduce el SHA del último despliegue funcional o `HEAD~1` para volver al anterior.