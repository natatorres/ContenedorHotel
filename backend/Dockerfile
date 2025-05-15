FROM php:8.0-fpm-alpine

# Instala dependencias del sistema y extensiones necesarias para Laravel con PostgreSQL
RUN apk add --no-cache \
    libzip-dev \
    oniguruma-dev \
    zip \
    unzip \
    bash \
    postgresql-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring zip

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Copia el proyecto Laravel
COPY . .

# Instala las dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Otorga permisos a los directorios necesarios
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]
