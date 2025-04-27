# 🛍️ WallaStore Frontend JS

Este proyecto es una práctica para el módulo de Frontend del bootcamp Web Full Stack de **KeepCoding**.

## 📋 Descripción

Aplicación web que simula la funcionalidad principal de un ecommerce estilo Wallapop:

- Registro de usuarios
- Login y autenticación
- Publicación de anuncios de compra o venta
- Listado de anuncios
- Detalle de anuncio
- Creación de anuncios

> **Importante:**  
> No se usan frameworks de JavaScript. Todo se desarrolla con **JavaScript Vanilla** y manejo manual del DOM.

Para el diseño se utiliza **TailwindCSS**.

---

## 📐 Arquitectura

En esta práctica decidí aplicar:

- **Screaming Architecture**: las carpetas principales gritan qué hace cada parte (`auth`, `ads`, `utils`, etc.)
- **Modelo Vista Controlador (MVC)** organizado **por responsabilidad**.

- **Clean Architecture**: dependencias invertidas usando un `apiClient` genérico.

### Estructura de carpetas:

```plaintext
MyWallaStore/
├── src/
│   ├── auth/
│   │   ├── login/
│   │   │   ├── loginController.js
│   │   │   ├── loginView.js
│   │   │   └── loginModel.js
│   │   └── register/
│   │       ├── registerController.js
│   │       ├── registerView.js
│   │       └── registerModel.js
│   ├── ads/
│   │   ├── list/
│   │   │   ├── adsListController.js
│   │   │   ├── adsListView.js
│   │   │   └── adsListModel.js
│   │   ├── detail/
│   │   │   ├── adDetailController.js
│   │   │   ├── adDetailView.js
│   │   │   └── adDetailModel.js
│   │   └── create/
│   │       ├── createAdController.js
│   │       ├── createAdView.js
│   │       └── createAdModel.js
│   ├── core/
│   │   └── apiClient.js
│   ├── styles/
│   │   ├── imput.css
│   │   └── output.css
│   └── utils/
│       └── authUtils.js
│       └── notificationsUtils.js
│       └── parseHash.js
├── index.js
├── index.html
└── db.json
```

### ⚙️ Instalación y ejecución:

Para poder ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Mitronios/keepcoding-frontend-js-project-my-wallastore

   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd mywallastore

   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   # o si utilizas Yarn:
   yarn install

   ```

4. \*\*Ejecuta el proceso de compilación de Tailwind CSS(en otra terminal):

   - Mientras desarrollas, Tailwind CSS necesita compilar tus estilos en tiempo real.
   - Abre una nueva terminal y ejecuta este comando para observar los cambios en tu archivo input.css y generar el output.css:

   ```bash
   npx @tailwindcss/cli -i ./src/styles/input.css -o ./src/styles/output.css --watch
   ```

5. **Inicia el servidor de desarrollo de Vite:**

   - En tu terminal principal (donde instalaste la dependencias), ejecuta este comando para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   # o si utilizas Yarn:
    yarn dev
   ```

Muchas gracias! si tienes alguna duda contactame.

--TO-DO: Doc en inglés--
