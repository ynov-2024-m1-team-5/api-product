# api-product

## Description
Cette API gère les produits de notre application.

## Endpoints

Base URL: `https://api-product-ocdd.onrender.com`.

Swagger: `https://api-product-ocdd.onrender.com/api/v1/docs`.

### POST /poducts/init
Initialise la base de données avec des produits

### GET /products/all
Récupère la liste de tous les produits.

### GET /products/all/active
Récupère la liste de tous les produits actifs.

### GET /products/{id}
Récupère les détails d'un produit spécifique.

### POST /products
Crée un nouveau produit.

### PUT /products/{id}
Met à jour les informations d'un produit existant.

### DELETE /products/{id}
Supprime un produit.

## Modèles de données

### Produit

| Champ           | Type          | Obligatoire | Description                           |
|-----------------|---------------|-------------|---------------------------------------|
| id              | INTEGER       | Oui         | Identifiant unique du produit          |
| name            | STRING        | Oui         | Nom du produit                        |
| description     | TEXT          | Oui         | Description détaillée du produit      |
| active          | BOOLEAN       | Oui         | Indique si le produit est actif ou non |
| thumbnail       | STRING        | Oui         | URL de l'image miniature du produit    |
| price           | INTEGER       | Oui         | Prix du produit en euro €            |
| quantityInStock | INTEGER       | Non         | Quantité disponible en stock           |
