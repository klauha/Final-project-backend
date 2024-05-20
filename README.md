<div align=center>

# Proyecto de Backend
## Tattoo Studio

 Este es el backend del sistema de gestion de incidencias. Este proyecto se realizó como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)


## Tecnologías Utilizadas

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)[![TypeOrm](https://img.shields.io/badge/TypeOrm-%23C70D2C?style=for-the-badge&color=%23C70D2C)](https://typeorm.io/)[![ThunderClient](https://img.shields.io/badge/Thunder_Client-%237A1FA2?style=for-the-badge)](https://www.thunderclient.com/)[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)[![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)](https://nodemon.io/)
</div>

## Tabla de Contenidos
- 🧾[Usuarios demo](#usuarios-bbdd)
- 🧾[Diseño BBDD](#diseño-bbdd)
- ⚙️[Instalacion en local](#einstalacion-en-local)
- 🎯[Endpoints](#endpoints)
- 💻[Contacto](#contacto)
- 🪪[Creditos](#creditos)


## Usuarios demo

```js
{
    user: "superadmin@superadmin.com,
    password: "123456"
}

{
    user: "dani@dani.com,
    password: "123456"
}
```

## Diseño BBDD
![Diseño BBDD](./img/db.png)

## Instalación en local
Nota: Es necesario tener instalado [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

1. Clonar el repositorio con el comando`$ git clone [URL del repositorio]`
2. Instalar dependencias con el comando` $ npm install `
3. Conectamos nuestro repositorio con nuestra base de datos, en el archivo ".env.example" tenemos un ejemplo, quitamos el ".example" y el archivo deberia quedar ".env", sustituimos valores con las credenciales de nuestra base de datos. El ultimo valor, seria el secreto de nuestro token.
4. Ejecutamos las migraciones con el comando`$ npm run run-migrations`
5. Ejecutamos los seeders `$ npm run seeder`
6. Ponemos en funcionamiento el servidor `$ npm run dev`

## Endpoints
[Endpoints collection json thunder client](./HTTP/thunder-collection_PROYECTO%20FINAL.json)

## Contacto

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:claudiaalvaro17@gmail.com)[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vanessabritogonzalezhttps://www.linkedin.com/in/claudia-alvaro-cano-47860538/)

## Créditos
Este proyecto ha sido realizado por mi, Claudia Álvaro, como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)
