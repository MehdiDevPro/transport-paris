# Transport Paris

## GitHub Actions Deployment

Ce dépôt contient une action GitHub qui uploade automatiquement l'artifact et le déploie sur GitHub Pages.

### Configuration

Le workflow `.github/workflows/deploy.yml` effectue les actions suivantes :

1. **Upload de l'artifact** : Uploade `artifact.tar` comme artifact GitHub avec une rétention de 90 jours
2. **Déploiement GitHub Pages** : Extrait le contenu de l'archive et le déploie sur GitHub Pages

### Déclenchement du workflow

Le workflow se déclenche automatiquement :
- À chaque push sur la branche `main`
- Manuellement via l'onglet "Actions" dans GitHub (workflow_dispatch)

### Configuration GitHub Pages

Pour activer le déploiement, assurez-vous que GitHub Pages est configuré dans les paramètres du dépôt :

1. Allez dans **Settings** > **Pages**
2. Sous **Source**, sélectionnez **GitHub Actions**
3. Le site sera déployé automatiquement lors du prochain push ou déclenchement manuel

### Structure de l'artifact

L'`artifact.tar` doit contenir un site web statique avec au minimum un fichier `index.html` à la racine.

## Workflow Details

### Jobs

#### 1. upload-artifact
- Checkout du code
- Upload de `artifact.tar` comme artifact GitHub

#### 2. deploy
- Dépend du job `upload-artifact`
- Checkout du code
- Extraction de `artifact.tar` dans le répertoire `dist`
- Configuration de GitHub Pages
- Upload du contenu pour Pages
- Déploiement sur GitHub Pages

### Permissions

Le workflow nécessite les permissions suivantes :
- `contents: read` - Pour lire le contenu du dépôt
- `pages: write` - Pour écrire sur GitHub Pages
- `id-token: write` - Pour l'authentification OIDC

---

## GitHub Actions Deployment (English)

This repository contains a GitHub Action that automatically uploads the artifact and deploys it to GitHub Pages.

### Configuration

The workflow `.github/workflows/deploy.yml` performs the following actions:

1. **Upload artifact**: Uploads `artifact.tar` as a GitHub artifact with 90-day retention
2. **GitHub Pages deployment**: Extracts the archive content and deploys it to GitHub Pages

### Workflow triggers

The workflow is triggered automatically:
- On every push to the `main` branch
- Manually via the "Actions" tab in GitHub (workflow_dispatch)

### GitHub Pages setup

To enable deployment, make sure GitHub Pages is configured in the repository settings:

1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will be automatically deployed on the next push or manual trigger

### Artifact structure

The `artifact.tar` must contain a static website with at least an `index.html` file at the root.
