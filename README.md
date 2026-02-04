# Transport Paris

Site web de présentation des services de transport à Paris - Mehdi Dev Pro

## Développement Local

### Prérequis

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers de build seront générés dans le dossier `dist/`

## Déploiement GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions lors de chaque push sur la branche `main`.

### Configuration

Le workflow `.github/workflows/deploy.yml` effectue les actions suivantes :

1. **Build** : Installe les dépendances et build l'application React avec Vite
2. **Déploiement** : Déploie le contenu du dossier `dist` sur GitHub Pages

### Configuration GitHub Pages

Assurez-vous que GitHub Pages est configuré dans les paramètres du dépôt :

1. Allez dans **Settings** > **Pages**
2. Sous **Source**, sélectionnez **GitHub Actions**
3. Le site sera déployé automatiquement

### URL du site

Le site est accessible à : `https://mehdidevpro.github.io/transport-paris/`

## Technologies

- React 18
- Vite 5
- CSS moderne

## Structure du projet

```
transport-paris/
├── public/           # Assets statiques
├── src/             # Code source React
│   ├── App.jsx      # Composant principal
│   ├── main.jsx     # Point d'entrée
│   └── *.css        # Styles
├── index.html       # Template HTML
├── vite.config.js   # Configuration Vite
└── package.json     # Dépendances
```
