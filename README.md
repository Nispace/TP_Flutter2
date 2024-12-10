Ce TP a pour objectif d'intégrer une application Flutter avec une base de données MySQL via une API backend. Voici un récapitulatif des étapes principales :

---

## **Étapes du TP : Flutter + MySQL**

### **1. Préparer le Backend (VM SERV_SLAM)**

#### a. Installation et configuration de Node.js :
- Installer Node.js.
- Créer un projet Node.js dans un dossier `flutter_mysql_backend` :
  ```bash
  mkdir flutter_mysql_backend
  cd flutter_mysql_backend
  npm init -y
  npm install express mysql body-parser 
  ```

#### b. Développer une API Node.js :
Créer un fichier `server.js` avec :
- Connexion à MySQL.
- Deux endpoints : 
  - `/api/utilisateurs` pour récupérer les utilisateurs.
  - `/api/utilisateurs` (POST) pour ajouter un utilisateur.

#### c. Configuration de MySQL :
- Créer une base `gestion_utilisateurs` et une table `users` :
  ```sql
  CREATE DATABASE gestion_utilisateurs;
  USE gestion_utilisateurs;
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(50),
      email VARCHAR(50)
  );
  INSERT INTO users (nom, email) VALUES
      ('Alice Dupont', 'alice@example.com'),
      ('Bob Martin', 'bob@example.com');
  ```

---

### **2. Développer l'application Flutter**

#### a. Initialiser le projet Flutter :
- Créer un projet Flutter avec :
  ```bash
  flutter create gestion_utilisateurs
  cd gestion_utilisateurs
  ```
- Ajouter `http: ^1.2.2` à `pubspec.yaml` et exécuter :
  ```bash
  flutter pub get
  ```

#### b. Configurer les services API :
Créer un fichier `api_service.dart` pour :
- **`fetchUtilisateurs()`** : récupérer les utilisateurs depuis l'API.
- **`addUtilisateur()`** : envoyer un utilisateur (nom et email) à l'API.

#### c. Construire l'interface utilisateur :
Dans `main.dart` :
- Afficher une liste des utilisateurs depuis l'API.
- Ajouter un formulaire pour soumettre un utilisateur.
