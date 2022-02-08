# Buynomics test

## Description

Single page application that allows you to do CRUD operations over a list of intermediaries. Built with React and Firebase - Firestore services.

## Backlog

- Implement Range and Dropdown types options
- Implement products Routes and Model (these would very much replicate what's already built for the intermediaries). 

# Client / Frontend

## React Router Routes (React App)

| Path | Component  | Permissions      | Behavior  |
| ---- | ---------- | ---------------- | --------- |
| `/`  | MainScreen | public `<Route>` | Main Page |



## Page Components

- MainScreen

## Components

- AddModal
- EditModal

## Contexts

- DistributorsContext
- ManufacturersContext
- RetailersContext 

# Server / Backend

## Models

Intermediary model

```
{
  name: {type: String, required: false, unique: false},
  order: {type: Number, required: false, unique: false},
  createdAt: {type: Timestamp, required: false, unique: true},
  type: {type: String, required: false, unique: false},
}
```

## API / Firebase Endpoints (backend routes)

| HTTP Method | URL                                                      | Request Body   | Success status | Error Status | Description                                                  |
| ----------- | -------------------------------------------------------- | -------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/manufaturers` `/distributors` `/retailers`             |                | 200            | 404          | Return a complete list of Intermediaries.                    |
| PUT         | `/manufaturers/:id` `/distributors/:id` `/retailers/:id` | {id, category} | 201            | 400          | Edits Intermediary details except for the category.          |
| POST        | `/manufaturers` `/distributors` `/retailers`             |                | 201            | 401          | Creates a new document within the selected collection-category. |
| DELETE      | `/manufaturers/:id` `/distributors/:id` `/retailers/:id` | {id, category} | 200            | 400          | Deletes a single intermediary by its ID.                     |

## Links

### Firebase Deploy

[LINK](https://buynomics-test.web.app/)

### Github

[LINK](https://github.com/thisisjacopo/buynomics-test)

### 