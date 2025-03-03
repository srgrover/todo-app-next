# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker componse up -d
```

2. Crear una copia del .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar comando ```npm install```
5. Ejecutar comando ```npm run dev```
6. Ejecutar los comandos de PRISMA:
    ```
    npx prisma migrate dev
    npx prisma generate
    ```
6. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Production

# Stage