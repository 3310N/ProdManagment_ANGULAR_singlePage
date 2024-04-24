# Student Payment Management Application

## Partie 1: Développer et Tester la partie Backend avec Spring.

**Objectif :**
Développer une application qui permet de gérer le paiement des étudiants. Chaque étudiant peut effectuer plusieurs paiements.
- Chaque étudiant est défini par son : id, firstName, lastName, email, sa filière, sa photo.
- Chaque Paiement est défini par son id, son code, sa date, son type (CASH, CHECK, TRANSFER), son statut (CREATED, VALIDATED, REJECTED), file (fichier PDF représentant le reçu de paiement).

**Étapes à suivre :**
1. Créer les entités JPA.
2. Créer les interfaces JPARepository basées sur Spring Data.
3. Générer des données aléatoires concernant quelques étudiants et pour chaque étudiant des paiements.
4. Créer un service web RESTful (ResController) qui expose les fonctionnalités suivantes :
  - Consulter tous les paiements.
  - Consulter un paiement en connaissant son ID.
  - Consulter les paiements d'un type donné.
  - Consulter les paiements d'un statut donné.
  - Consulter les paiements d'un étudiant donné.
  - Consulter les paiements d'une filière donnée.
  - Consulter tous les étudiants.
  - Consulter les étudiants d'une filière donnée.
  - Consulter un étudiant en connaissant son code.
  - Effectuer un nouveau paiement avec les données et le reçu de paiement au format PDF.
  - Mettre à jour le statut d'un paiement.
  - Consulter le reçu d'un paiement (fichier PDF).
5. Tester le backend en utilisant un client REST (Postman) et avec Swagger UI.
6. Faire un refactoring du code en utilisant la couche service, les DTOs et les Mappers.

## Partie 2: Développer la partie frontend en utilisant Angular avec Angular Material pour la partie design.

1. Créer un projet Angular.
2. Intégrer Angular Material.
3. Créer une page template contenant une barre d'outils avec un menu et un menu latéral.
4. Créer les différents composants de l'application.
5. Créer un système d'authentification simple qui oblige l'utilisateur à s'authentifier avant d'accéder à l'application. Dans un premier temps, les utilisateurs et les rôles qui ont le droit d'accéder à l'application sont stockés de manière statique dans le service d'authentification. Protéger les routes par un Guard d'authentification et un Guard pour les autorisations.
6. Créer les composants fonctionnels de l'application :
- Afficher les paiements avec une pagination frontend.
  - Afficher et chercher les étudiants.
  - Afficher le tableau de bord d'un étudiant (informations et paiements).
  - Ajouter un nouveau paiement en téléchargeant le reçu de paiement.
  - Consulter les détails d'un paiement.
  - Mettre à jour le statut d'un paiement.

## Partie 3: Sécurité avec Spring Security et Json Web Token.

- Sécuriser le backend.
- Sécuriser le frontend.

Ce projet est un exercice de développement full-stack utilisant Java Spring Boot pour le backend, Angular pour le frontend, et intégrant des mesures de sécurité pour une application robuste.
