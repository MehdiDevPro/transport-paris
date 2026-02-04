# Transport Paris - GitHub Actions Deployment

Ce dépôt contient une GitHub Action qui déploie automatiquement le projet [paris-transport-showcase](https://github.com/MehdiDevPro/paris-transport-showcase) sur GitHub Pages.

## Configuration requise

### 1. Créer un Personal Access Token (PAT)

Pour permettre à cette Action d'accéder au dépôt privé `paris-transport-showcase`, vous devez créer un Personal Access Token:

1. Allez dans **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. Cliquez sur **Generate new token** > **Generate new token (classic)**
3. Donnez un nom descriptif (ex: "Deploy showcase from transport-paris")
4. Sélectionnez l'expiration souhaitée
5. Cochez les permissions suivantes:
   - `repo` (Full control of private repositories)
6. Cliquez sur **Generate token**
7. **Copiez le token immédiatement** (vous ne pourrez plus le voir après)

### 2. Ajouter le secret au dépôt

1. Allez dans les **Settings** de ce dépôt (`transport-paris`)
2. Naviguez vers **Secrets and variables** > **Actions**
3. Cliquez sur **New repository secret**
4. Nom: `PRIVATE_REPO_TOKEN`
5. Valeur: Collez le Personal Access Token créé précédemment
6. Cliquez sur **Add secret**

### 3. Activer GitHub Pages

1. Allez dans les **Settings** de ce dépôt
2. Naviguez vers **Pages**
3. Dans **Source**, sélectionnez **GitHub Actions**

## Fonctionnement

Le workflow s'exécute automatiquement:
- À chaque push sur la branche `main`
- Manuellement via l'onglet **Actions** (workflow_dispatch)

### Étapes du workflow

1. **Checkout du dépôt privé**: Récupère le code de `paris-transport-showcase`
2. **Setup Node.js**: Configure Node.js version 20
3. **Installation des dépendances**: Exécute `npm ci`
4. **Build**: Compile le projet avec `npm run build`
5. **Upload de l'artefact**: Prépare le dossier `dist` pour le déploiement
6. **Déploiement**: Déploie sur GitHub Pages

## Fichier de workflow

Le workflow est défini dans `.github/workflows/deploy-showcase.yml`

## Remarques

- Le dépôt `paris-transport-showcase` doit avoir un fichier `package.json` avec un script `build`
- Le build doit générer les fichiers dans le dossier `dist`
- Les permissions nécessaires sont déjà configurées dans le workflow
