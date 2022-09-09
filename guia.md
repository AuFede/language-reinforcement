https://www.youtube.com/watch?v=i3OdKwuBjeM



4:21:00

#### Comandos NPM:

npm init -y (inicializar sin preguntas).
npm install/i "paquete" (instalador de paquetes).
npm remove "paquete" (remueve el paquete instalado).
npm install node-fetch/import fetch from "node-fetch", hace
implementación de la fetch API.
Con "type":"module" dentro del package-json, podemos utilizar la sintaxis de import/export.
module.exports es la forma de exportar de common JS.
También se puede expertar con export default.

#### Comandos NPX:

NPX es una suerte de ejecutador de paquetes.
Con NPX podemos situarnos en la carpeta .bin, sin necesidad de ir carpeta por carpeta para tratar de ejecutar un CLI.

#### Algunos datos útiles:

1. Las dependencias de package-json son importantes en el caso de que la carpeta node_modules se elimine, nos da la posibilidad de volver
a instalar los mismos paquetes que venimos trabajando.
2. Analizar y estudiar: http port (ver puertos reservados, FTP, SMTP).
3. NPM no es lo mismo que nodejs, NPM es un manejador de paquetes.
4. Además del flag -D, existe el flag -g para instalar módulos globales en todo el computador.
5. La carpeta .bin posee los ejecutables que nosotros podemos usar en nuestro proyecto.
6. Con node podemos instalar módulos que funcionan como CLI´s (COMMON LINE INTERFACE = HERRAMIENTAS QUE FUNCIONAN DESDE CONSOLA).
7. El módulo HTTP-server sirve para crear un servidor con un solo comando.
8. Cuando trabajamos con event-loop, nos podemos encontrar con código bloqueante que no permite el correcto funcionamiento del código. Para solucionar esto, utilizamos asincronía.
9. Cuando trabajamos con async-await podemos llegar a tener errores también. Para eso se utiliza try-catch.
10. Para generar un error, utilizamos throw.
11. 'util' es un módulo de utilidades de NodeJS, para poder convertir código o tener código más cómodo.
11. Con promisify puedo convertir a un callback en una promesa, sin la necesidad de tener que utilizar return new Promise.
12. La propiedad on del módulo "events" permite escuchar un evento, es como si fuera una addEventListener.
14. Los streams nos permiten, dividir un archivo grande en múltiples partes y así que sea más fácil su descarga.
15. --- const {createReadStream} = require('fs') --- no requiere 'fs/promises' porque 'createReadStream' está basado en eventos.
16. 'pipe' sirve para pasar datos a otra función.
17. Ver doc de commonJS.
18. En NodeJS 2022 se puede usar top level await, siempre y cuando haya type:module en package-json. Con esto se optimizar la función de async.