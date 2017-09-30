# Chau Jekyll, Hola Nextein

Repositorio de la charla del 28 de Septiembre en Meetups.js sobre Nextein

## Introduccion

El repo contiene varios branchs con distintos conceptos mostrados en la demo.

```bash
git branch -l
  01-initial
  02-posts
  03-emotion
  04-components
  05-custom-renderers
```

## Demo paso a paso

En el master se encuentra la version final. Es recomendable correr `npm install` cada vez que cambiamos de branch dado que vamos agregando funcionalidad y algunas librerias.

### Ejecutar cada paso

Para correr la demo hacemos checkout del branch, instalamos dependencias y corremos la version de desarrollo. 

```
git checkout 01-initial

```

```
npm install

```

```
npm run dev

```

En cualquiera de los pasos podemos correr la generacion estatica y servirla como se explica a continuacion:

### Generar la version estatica

Para correr el export solo tenemos que ejecutar:

```
npm run export

```

Luego, podemos servir la carpeta `out` usando un web server. Por ejemplo con `http-server` (`npm i -g http-server`)

```
http-server out/
```
