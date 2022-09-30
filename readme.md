
# PoC prueba de microservicios pos-despligue

Esta es una PoC para probar la ejecución y reporte de pruebas escritas en Postman para microservicios desplegados. La prueba de concepto utiliza la librería [Newman](https://www.npmjs.com/package/newman) para ejecutar colecciones Postman por linea de comando y la librería [Newman reportet HTML Extra](https://www.npmjs.com/package/newman-reporter-htmlextra) para generar un reporte con los resultados de cada ejecución.

### Qué cubre esta prueba de concepto?

- Ejecución por linea de comando de los tests definidos en una colección Postman
- Ejemplo de parametrización de URL y http headers en las pruebas
- Generación de reporte con resultados de la ejecución
- Publicación de repote en JFrog
- Ejecución en Jenkins de pruebas para microservicios desplegado

## Requisitos

- Contar con una instancia de Jenkins
- Instalar plugin de NodeJs en Jenkins
- Instalar plugin de Git en Jenkins
- Crear un nuevo job en Jenkins donde poner el script contenido en el Jenkinsfile adjunto
- Contar con una instancia o cuenta de jFrog
- Crear un repositorio de jFrog donde compartir los reportes

## Scripts NPM

La sección "scripts" del archivo package.json contiene comandos de ejemplo que son utilizados en esta pruebas de concepto.

| Key                               | Descripción                                                                     |  
|:----------------------------------|:--------------------------------------------------------------------------------|
| **test:api-[dev,qa,prod]**            | Comando para lanzar las pruebas definidas en la colección de Postman que se encuentra en la ruta test/api/collection.json utilizando el archivo de variables por ambiente ambiente indicado en el nombre y que se encuentra en la ruta test/api/env/[dev,qa,prod].env.json  |
| **test:api-dev-param-override**     | Comando indentico al anterior, pero con una opción adicional para sobreescribir uno de los parámetros definidos en el archivo de variables por ambiente ambiente  |

#### Anatomía de un script

| Sección                                 | Descripción                                                                     |  
|:----------------------------------------|:--------------------------------------------------------------------------------|
| `newman run test/api/collection.json`   | inicio del script, se indica qué colección será ejecutada |
| `-e test/api/env/dev.env.json`   | archivo de ambiente, se indica qué archivo de variables por ambiente se utilizará |
| `--env-var \"restBaseUrl=https://api-test.com"`   | variable por linea de comando, indica que se sobreescribirá una varaible definida en el archivo de variables por ambiente |
| `-r htmlextra`   | reporteador, se indica qué reporteador se utilizará para generar los reportes |  
| `--reporter-htmlextra-export ./newman/report.htmlnano` | ruta de reporte, opción del reporteador donde se indica la ruta y nombre del reporte a ser generado |  

#### Publicación en JFrog

| Sección                                 | Descripción                                                                     |  
|:----------------------------------------|:--------------------------------------------------------------------------------|
| `curl -u<email>:<token>`   | inicio del script, se indica el usuario y token para autenticación |
| `-T ./newman/report.html`   | path del reporte a ser publicado |
| `<artifactory-url>/<repository>/${currentDateTime}.html`   | path y nombre del archivo en el repositorio creado en jFrog |

## Librerias

[Newman](https://www.npmjs.com/package/newman)
[Newman reportet HTML Extra](https://www.npmjs.com/package/newman-reporter-htmlextra)

## Links de utilidad

[Documentación de herramienta Newman](https://learning.postman.com/docs/running-collections/using-newman-cli/newman-options/)
[Opciones de linea de comandos de Newman](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
