# Frontend: listas de tarefas (React)

Frontend em React para a API de listas de tarefas em [backend-django-integration-react](https://github.com/Leonardoongaratto/backend-django-integration-react). O usuário faz login com token e vê as próprias listas com seus itens.

## Componentes

- `LoginComponent`: login e obtenção do token na API
- `UserLists`: busca as listas do usuário na API
- `ListComponent` / `ItemComponent`: exibem cada lista e seus itens

## Stack

React · JavaScript · Create React App · Testing Library

## Como rodar

```bash
npm install
npm start
```

A URL da API está fixa nos componentes, apontando para o deploy antigo no Heroku (`list-of-items.herokuapp.com`), que não está mais no ar. Para usar localmente, suba o backend e troque essa URL por `http://127.0.0.1:8000`.
