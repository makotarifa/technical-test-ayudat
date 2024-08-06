# *English*
# Technical Front-End Test with Node.js, Vite, and Vue3 for AyudaT
## Introduction

This project is a technical test developed for AyudaT, aimed at creating a web front-end from a Figma mockup. The following technologies have been used for this purpose:

- **Node.js** for the runtime environment.
- **Npm** for dependency management.
- **Vite** as the build tool.
- **TypeScript** as the programming language.
- **ESLint** and **Prettier** for code formatting.
- **Vue3** for front-end development.
- **Pinia** for state management.
- **Vite-Mock-Server** for simulating an API.
- **NaiveUI** for pre-built components.
- **Docker** for application deployment.

## Environment Setup

Before starting the project, you need to configure the environment variables. To do this, rename the file `.env.local.example` to `.env.local` and adjust the API value as needed.
Since there is no real backend, you can use the mock server located in the `mocks` folder to simulate an API. Set the `VITE_API_URL` variable to `http://localhost:5173` in the `.env.local` file.
Alternatively, you can use the following link as a test API: `https://run.mocky.io/v3/01077278-371a-429c-85ef-0601f82f2cc6`.

```sh
mv .env.local.example .env.local
```

## Deployment with Docker

The project is configured to deploy using Docker and Docker Compose. To get the project up and running, follow these steps:

1. Ensure you have Docker and Docker Compose (or an alternative like Rancher Desktop) installed on your machine.

2. First, build the container with the following command:

    ```sh
    docker-compose build
    ```

3. Once the container is built, you can start the application with:

    ```sh
    docker-compose up -d
    ```

4. Finally, when the container is running, you can access the application in your browser at `http://localhost`, as it is configured to run on port 80 by default.
# *Español*
# Prueba Técnica de FrontEnd con NodeJS, Vite y Vue3 para AyudaT.
## Introducción

Este proyecto es una prueba técnica desarrollada para AyudaT cuyo proposito es la creación de un front web a partir de una maqueta de Figma. Para este proposito se han utilizado las siguientes tecnologías:

- **NodeJS** para el entorno de ejecución.
- **Npm** para la gestión de dependencias.
- **Vite** como herramienta de construcción.
- **TypeScript** como lenguaje de programación.
- **ESLint** y **Prettier** para el formateo de código.
- **Vue3** para el desarrollo del front-end.
- **Pinia** para el control de estados.
- **Vite-Mock-Server** para la simulación de una API.
- **NaiveUI** para los componentes prefabricados.
- **Docker** para el despliegue de la aplicación.

## Configuración del Entorno

Antes de iniciar el proyecto, es necesario configurar las variables de entorno. Para ello, renombre el archivo `.env.local.example` a `.env.local` y ajuste el valor de la api a su necesidad.
Al no contar con un backend real, podemos utilizar el mock server que se encuentra en la carpeta `mocks` para simular una API. Para ello, ajuste el valor de la variable `VITE_API_URL` a `http://localhost:5173` en el archivo `.env.local`.
Tambien puede usar el siguiente link como API de prueba: `https://run.mocky.io/v3/01077278-371a-429c-85ef-0601f82f2cc6`.

```sh
mv .env.local.example .env.local
```
## Despliegue usando Docker

El proyecto está configurado para desplegarse utilizando Docker y Docker Compose. Para poner en marcha el proyecto debes de seguir los siguientes pasos:

1. Asegúrate de tener Docker y Docker Compose o alguna alternativa (Como Rancher Desktop) instalados en tu máquina.

2. Primero necesitaremos construir el contenedor con el siguiente comando:

    ```sh
    docker-compose build
    ```
3. Una vez que el contenedor esté construido, podrás iniciar la aplicación con:
    ```sh
    docker-compose up -d
    ```

4. Finalmente, cuando el contenedor esté ejecutado, podrás acceder a la aplicación en tu navegador en la dirección `http://localhost`, ya que está configurado para correr en el puerto 80 por defecto.
