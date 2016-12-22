# Instalación

## Requisitos

| Paquete | Descripción |
| ---------- | ---------- |
| Node.js  | Node.js javascript del lado de servidor, versión LTS |
| n | Manejador de versiones de Node.js |
| npm | Manejador de paquetes por defecto para Node.js |

Instalación sobre Debian Jessie

##Instalar paquetes básicos

Instalacion de NodeJS
```sh
apt-get install node
```
Instalacion de Npm
```sh
apt-get install npm
```
Instalacion de bower de manera global (manejador de paquetes para el frontend)
```sh
npm install bower -g
```
Instalacion de gulp de manera global (automatizador de tareas)
```sh
npm install gulp -g
```
Instalacion de yeoman de manera global (generador de proyectos)
```sh
npm install yo -g
```
Instalacion del generador XXX
```sh

```
##Instalar el Proyecto
Instalar dependencias del proyecto con `npm` y `bower`

```sh
npm install
bower install
```
##Iniciar el Proyecto
```sh
gulp serve
```