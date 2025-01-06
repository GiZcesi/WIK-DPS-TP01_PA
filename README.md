# Serveur Ping

Ce projet est un serveur HTTP simple construit avec Node.js. Il répond aux requêtes `GET` sur le point de terminaison `/ping` en renvoyant les en-têtes de la requête au format JSON. Pour toutes les autres requêtes, le serveur renvoie une réponse `404 Not Found`.

## Fonctionnalités

- Gère les requêtes `GET` sur le point de terminaison `/ping`.
- Renvoie les en-têtes de la requête au format JSON.
- Retourne une erreur `404` pour toutes les autres requêtes.

## Prérequis

- Node.js (version 14 ou supérieure recommandée)
- TypeScript (installé globalement ou localement dans le projet)

## Installation

1. Clonez ce dépôt ou copiez le code du serveur.

2. Accédez au répertoire du projet :

   ```bash
   cd votre-repertoire-de-projet
   ```

3. Installez TypeScript (si ce n'est pas déjà fait) et générez le fichier de configuration :

   ```bash
   npm install --save-dev typescript
   npx tsc --init
   ```

   Exemple minimal de `tsconfig.json` :
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "commonjs",
       "outDir": "./dist",
       "strict": true
     },
     "include": ["*.ts"]
   }
   ```

4. Compilez le fichier TypeScript :

   ```bash
   npx tsc
   ```

   Cela génère un fichier compilé dans le répertoire `dist` (ou celui spécifié dans `tsconfig.json`).

## Utilisation

1. Lancez le serveur en exécutant le fichier JavaScript généré dans le répertoire `dist` :

   ```bash
   node dist/server.js
   ```

2. Par défaut, le serveur écoute sur le port `3000`. Vous pouvez changer le port en configurant la variable d'environnement `PING_LISTEN_PORT` :

   ```bash
   PING_LISTEN_PORT=8080 node dist/server.js
   ```

3. Envoyez une requête `GET` au point de terminaison `/ping` en utilisant votre outil préféré (par exemple, `curl`, Postman ou un navigateur) :

   ```bash
   curl http://localhost:3000/ping
   ```

   Exemple de réponse :

   ```json
   {
     "host": "localhost:3000",
     "user-agent": "curl/7.64.1",
     "accept": "*/*"
   }
   ```

4. Pour toute autre requête, le serveur renverra une réponse `404 Not Found`.

## Explication du Code

- Le serveur est créé en utilisant le module intégré `http` de Node.js.
- Il écoute sur le port spécifié (`PING_LISTEN_PORT` ou `3000` par défaut).
- Il gère les requêtes entrantes :
  - Pour `GET /ping`, il répond avec les en-têtes de la requête.
  - Pour toute autre requête, il répond avec un statut `404`.

## Exemple de Code

```typescript
import { createServer } from 'http';
const PORT = process.env.PING_LISTEN_PORT || 3000;

createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers, null, 2));
  } else {
    res.writeHead(404).end();
  }
}).listen(PORT, () => console.log(`Serveur écoute sur PORT ${PORT}`));
```

## Licence

Ce projet est open source et disponible sous la [Licence MIT](LICENSE).

