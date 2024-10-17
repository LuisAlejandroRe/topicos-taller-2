# Proyecto de Pruebas Automatizadas con Playwright: Simulador de batallas Pokemón

El propósito de este proyecto es automatizar la ejecución de pruebas de software utilizando la herramienta Playwright. La ejecución se realizará sobre el sitio web https://play.pokemonshowdown.com, que es un simulador de batallas del videojuego y serie animada Pokémon, donde el objetvo es competir con un grupo de pokemones que tienen características de ataque. El objetivo de la prueba es automatizar la creación de un equipo que tendrá 5 pokemones. Cada pokemon se debe configurar con sus respectivos items y las características de ataque teniendo en cuenta los limites definidos en la aplicación.

## Integrantes:

| Nombre                         | Correo                   |
| -------------------------------| -------------------------|
| Alejandro Realpe               | larealpem@eafit.edu.co   |
| Mateo Echeverri                | mecheverp1@eafit.edu.co  |
| Anderson Aguiar                | jaguiar@eafit.edu.co     |


## Versión Node.js
La automatización se realizó con la versión 20 de Node. 

## Instalación

1. Clona el repositorio con el siguiente comando: _git clone https://github.com/LuisAlejandroRe/topicos-taller-2_

3. Instala las dependencias con el siguiente comando: _npm install_

## Uso

Ejecutar las pruebas con el siguiente comando: _npx playwright test_

## Navegadores

La automatización se realizó interactuando con el navegador _Chromium_

## Documentación código fuente

A continuación se describen las clases principales implementadas en la automatización:

### Clase HomePage.ts
Clase que permite la apertura y navegación del sitio web a automatizar (https://play.pokemonshowdown.com) utilizando Playwright. A continuación, se describe las partes principales del código:
* Se importa el tipo Page de Playwright, el cual representa una página del navegador y proporciona métodos para interactuar con la misma.
* El constructor recibe un objeto page de tipo Page.
* El método _navegate_ se utiliza para navegar en la URL de la página web del simulador de Pokemón.
* El método opanTeamBuilder se encarga de buscar el botón Teambuilder con el fin de dar clic y abrir la sección de constrcucción del equipo (Teambuilder)

### Clase TeamListPage.ts
Clase que busca el botón de creación de un nuevo equipo y da clic para pasar a la página webn de creación. A continuación, se describe las partes principales del código:
* Se importa el tipo Page de Playwright, el cual representa una página del navegador y proporciona métodos para interactuar con la misma.
* El constructor recibe un objeto page de tipo Page.
* El método _createNewTeam_ se utiliza para interactuar con el botón que permite la generación del equipo, dando clic a través del método locator de Playwright.

### Clase TeamCreationPage.ts
Clase que permite la creación y validación de equipos. A continuación, se describe las partes principales del código:
* Selecciona un formato de combate y una generación de Pokémon.
* Navega a la sección para seleccionar el formato.
* Desde la sección de creación de equipos agrega el Pokémon.
* Valida que el equipo creado sea apto para el formato y generación seleccionados, con una verificación que muestra un mensaje de confirmación.


### Clase PokemonDetailsPage.ts
Clase que permite la personalización y comnfiguración de cada Pokemón teniendo en cuanta sus características y sus cualidades de ataque. A continuación, se describe las partes principales del código:
* Agrega un Pokémon a través de un cuadro de búsqueda.
* Selecciona un ítem para el Pokémon.
* Selecciona los movimientos (hasta 4) para el Pokémon.
* Configura las estadísticas de esfuerzo (EVs) para los diferentes atributos.
* Verifica el conteo total de EVs, asegurándose de que esté en 0.
* Regresa a la página anterior (lista de equipos).


### Script teamBuilder.spec.ts
Script de automatización que sigue el patrón Page Object Model (POM), utilizando datos de una fuente externa (Data Driven Framework) para ejecutar el flujo de prueba de manera estructurada y modular. A continuación, se describe las partes principales del código:
* Navega a la página principal y abre el constructor de equipos.
* Inicia la creación de un nuevo equipo, seleccionando formato y generación.
* Añade Pokémon al equipo, configurando nombre, objeto, movimientos y estadísticas de esfuerzo (EVs) para cada Pokémon de la lista, y toma capturas de pantalla.
* Valida el equipo y guarda una captura final.


## Fuente de datos

Para la ejecución de la prueba se definió un archivo JSON que contandrá la data de pruebas. El archivo tiene los siguientes elementos:
| Elemento                       | Descripción                                                        |
| -------------------------------| -------------------------------------------------------------------|
| format                         | El formato de pokén a generar. Todos serán de tipo Uber.           |
| gen                            | Número de pokemones que tendrá el equipo.                          |
| pokemonList                    | Lista o arreglo de objetos de tipo Pokemón.                        |
| name                           | Nombre del Pokemón                                                 |
| item                           | Característica del Pokemón                                         |
| ability                        | Capacidad o habilidad del Pokemón                                  |
| moves                          | Objeto con los movimientos definidos para el Pokemón.              |
| evStats                        | Estadísticas de las característias de ataque que tiene el Pokemón. |



