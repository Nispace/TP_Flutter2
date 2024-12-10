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
  - ![image](https://github.com/user-attachments/assets/ac8e8f12-c879-4978-ba0b-9a52c21cb72b)


  - Choix du port 3004 :
  - ![image](https://github.com/user-attachments/assets/260302bc-8e41-48ad-a2f1-db77eb39676c)


  - Conexion a la BDD (Remplacer le password par celui de l'utilisateur root ) :
  -  ![image](https://github.com/user-attachments/assets/f4c844a2-b58c-412c-98e0-8e1a23c8867d)


  


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
- ![image](https://github.com/user-attachments/assets/058b35eb-8cf9-4e6f-9bd7-9170066317b4)


- Ajouter `http: ^1.2.2` à `pubspec.yaml` et exécuter :
- ![image](https://github.com/user-attachments/assets/2abd6e16-c07d-45ba-8273-19acec8cc832)


  ```bash
  flutter pub get
  ```

#### b. Configurer les services API :
- Voici le base url que nous utiliserons pour les deux options :
- ![image](https://github.com/user-attachments/assets/825f83b8-a823-48e5-be44-a1b7ea7ebc46)


- Créer un fichier `api_service.dart` pour :
- **`fetchUtilisateurs()`** : récupérer les utilisateurs depuis l'API.
-  ![image](https://github.com/user-attachments/assets/c93041ac-caf6-4e63-bdb0-6ff7569973f9)


- **`addUtilisateur()`** : envoyer un utilisateur (nom et email) à l'API.
- ![image](https://github.com/user-attachments/assets/b0c667b3-eaee-4458-8863-082bb6b17290)



#### c. Construire l'interface utilisateur :
Dans `main.dart` :
- Affichage une liste des utilisateurs depuis l'API.
- Ajout du formulaire pour soumettre un utilisateur.

#### d. Résultat interface :
- une fois toutes les étapes précédentes terminées , lancer le projet flutter :
- ![image](https://github.com/user-attachments/assets/73cc7bf2-2388-4005-929a-171d17a67bcd)
  

- Liste des utilisateurs :
- ![image](https://github.com/user-attachments/assets/16010a6c-5e3c-4c9f-836d-9ffacefbc813)


- Formulaire d'ajout :
- ![image](https://github.com/user-attachments/assets/1ebff0fa-14b2-4814-b5a2-e52dd38c5b83)


-Schéma architecture : 
```bash
+--------------------+         HTTP Requests         +------------------+         SQL Queries         +--------------------+
|  Flutter Frontend  | <--------------------------> |  Node.js Backend | <-------------------------> |    MySQL Database  |
+--------------------+                              +------------------+                             +--------------------+
| - User Interface   |                              | - server.js       |                             | - Table: users     |
| - HTTP (http.dart) |                              | - REST API:       |                             |   * id INT         |
| - JSON Parsing     |                              |   * GET           |                             |   * nom VARCHAR    |
| - Form Inputs      |                              |   * POST          |                             |   * email VARCHAR  |
+--------------------+                              +------------------+                             +--------------------+

```

