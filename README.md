# Cahier des Charges : Application Web de Séparation de Courses

## 1. Présentation du projet

**Nom du projet** : DivCo

**Objectif** : Développer une application web permettant aux colocataires de gérer et de partager les frais de courses de manière simple et efficace, tout en gardant une trace de leurs dépenses.

## 2. Public cible

- Colocataires souhaitant gérer ensemble leurs courses.
- Groupes d'amis vivant ensemble.

## 3. Fonctionnalités

### 3.1 Gestion des utilisateurs

- **Création de compte** :
    - Formulaire d'inscription demandant les noms des colocataires (20+).
    - Génération d'un code unique envoyé par e-mail ou afficher lors de l’inscription lors de la création du compte.
- **Authentification** :
    - Système de connexion via le code unique.
    - Possibilité de réinitialiser le code en cas d'oubli.

### 3.2 Ajout des courses

- **Ajout manuel** :
    - Interface intuitive pour entrer chaque produit acheté (nom, quantité, prix, type division).
- **Ajout via fichier de facture** :
    - Option de téléchargement de fichiers image (JPEG, PNG, PDF) pour scanner des tickets de caisse.
    - Utilisation d'une bibliothèque OCR (ex: Tesseract.js) pour extraire les informations des tickets et les remplir automatiquement dans l'application.

### 3.3 Répartition des coûts

- **Partage à parts égales** :
    - Calcul automatique des coûts à partager de manière égale entre les colocataires.
- **Répartition personnalisée** :
    - Options pour spécifier des pourcentages de partage ou des quantités (ex : pour une boîte d'œufs de 16, possibilité de définir que l'un en paie 5 et l'autre 3).

### 3.4 Gestion des remboursements

- **Historique des remboursements** :
    - Suivi des remboursements en quantitatif (ex: A rembourse à B 3 œufs).
- **Aperçu des dettes** :
    - Interface montrant qui doit de l'argent à qui et combien.

### 3.5 Historique et rapports

- **Historique des achats** :
    - Base de données stockant tous les achats effectués, avec des filtres pour rechercher par date, produit, ou colocataire.
- **Statistiques** :
    - Tableau de bord affichant les dépenses totales, par colocataire, et par type de produit.
    - Graphiques illustrant les dépenses sur différentes périodes.

### 3.6 Notifications

- **Notifications web** :
    - Alertes pour informer les utilisateurs des nouveaux ajouts de courses, remboursements, ou modifications de dépenses.
    - Système de gestion des préférences de notification (activer/désactiver).

## 4. Design de l'application

### 4.1 Interface utilisateur (UI)

- **Style moderne et épuré** : Design responsive adapté à tous les appareils (mobiles, tablettes, ordinateurs).
- **Navigation intuitive** : Menu clair pour accéder facilement aux différentes sections (ajout de courses, historique, remboursement, etc.).

### 4.2 Expérience utilisateur (UX)

- **Facilité d'utilisation** : Flux logique pour l'ajout de courses et la gestion des utilisateurs.
- **Aide intégrée** : FAQ et tutoriels pour aider les utilisateurs à comprendre les fonctionnalités.

## 5. Technologies à utiliser

- **Frontend** : React.js ou Vue.js pour construire une interface réactive.
- **Backend** : Node.js avec Express pour gérer les API.
- **Base de données** : MySQL pour le stockage des données.
- **OCR** : Tesseract.js pour la reconnaissance de texte sur les images des tickets de caisse.
- **Notifications** : Web Notifications API pour gérer les alertes.

## 6. Sécurité

- **Gestion des accès** : Sécuriser l'API avec des tokens d'authentification.
- **Stockage sécurisé des données** : Chiffrement des données sensibles dans la base de données.
- **Protection contre les attaques courantes** : Implémentation des meilleures pratiques pour prévenir les attaques XSS, CSRF, etc.

## 7. Planification et délais

[Emploie du temps](https://www.notion.so/11b69385c3db804491f5da664e1fb9de?pvs=21)

## 8. Budget

- **Estimations des coûts** : Évaluer les coûts liés aux ressources, à l'hébergement et aux outils nécessaires.

## 9. Évolutions futures

- **Intégration de transactions financières** : Prévoir un système de paiement en ligne (ex: Stripe, PayPal).
- **Application mobile** : Considérer le développement d'une version mobile native à l'avenir.
