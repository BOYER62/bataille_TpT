FROM php:7.4-apache

COPY ./php-config.ini /usr/local/etc/php/conf.d/php-config-overrides.ini

WORKDIR /var/www/html/

RUN apt-get update \
&& apt-get install tree \
&& docker-php-ext-install pdo_mysql