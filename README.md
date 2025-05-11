# 📝 Blogging Platform API

Uma API RESTful de plataforma de blog construída com **Node.js + TypeScript**, com suporte a **autenticação JWT**, **CRUD de posts**, **categorias**, **tags** e testes unitários em cada funcionalidade.

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- JWT (Autenticação)
- Bcrypt (Hash de senha)
- Jest (Testes)
- Armazenamento temporário em memória

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/      # Camada de controle (Express)
├── database/         # Simulação de banco de dados em memória
├── middlewares/      # Autenticação JWT
├── models/           # Tipagens (Post, User, Comment)
├── routes/           # Rotas da aplicação
├── services/         # Lógica de negócios
├── __tests__/        # Testes unitários com Jest
└── index.ts          # Ponto de entrada da API
```

---

## 📦 Instalação

```bash
git clone https://github.com/seuusuario/blogging-platform-api.git
cd blogging-platform-api
npm install
```

---

## 🧪 Scripts

```bash
# Iniciar em desenvolvimento
npm run dev

# Rodar testes
npm test

# Build para produção
npm run build
npm start
```

---

## 🔐 Autenticação

Autenticação via **JWT**, com envio de token no header:

```http
Authorization: Bearer <token>
```

---

## 📚 Endpoints

### ✅ Usuários

- `POST /register` — Criar conta
- `POST /login` — Login e obter token

### 📝 Posts

- `GET /posts` — Listar todos os posts
- `GET /posts/:id` — Visualizar post específico
- `POST /posts` — Criar post (autenticado)
- `PUT /posts/:id` — Atualizar post (somente autor)
- `DELETE /posts/:id` — Excluir post (somente autor)
- `GET /posts?category=tech` — Filtrar por categoria
- `GET /posts?tag=nodejs` — Filtrar por tag

### 💬 Comentários

- `GET /posts/:id/comments` — Listar comentários
- `POST /posts/:id/comments` — Adicionar comentário (autenticado)

---

## 🧪 Testes

Todos os serviços possuem testes unitários usando `jest`.

```bash
npm test
```

---
