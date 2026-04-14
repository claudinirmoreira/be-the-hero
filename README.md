# Be The Hero

Aplicação para conectar ONGs a pessoas que desejam ajudar em casos específicos.

## Stack Tecnológica

### Backend
- **Node.js** com Express
- **Knex.js** para migrations e query builder
- **SQLite3** (desenvolvimento) / **PostgreSQL** (produção)

### Frontend
- **React 18**
- **React Router v6**
- **Axios**
- **React Icons**

### Mobile
- **Expo SDK 50**
- **React Navigation v6** (native-stack)
- **React Native**

## Estrutura do Projeto

```
be-the-hero/
├── backend/           # API REST
│   └── src/
│       ├── controllers/   # Lógica de negócio
│       ├── database/     # Conexões e migrations
│       └── routes.js     # Rotas da API
├── frontend/          # Aplicação web
│   └── src/
│       ├── pages/        # Páginas da aplicação
│       ├── services/      # Configuração da API
│       └── routes.js     # Rotas do React
└── mobile/            # Aplicação mobile (Expo)
    └── src/
        ├── pages/        # Telas da aplicação
        ├── services/     # Configuração da API
        └── routes.js     # Navegação
```

## Requisitos

- Node.js 18+
- npm 9+
- Expo CLI (para o mobile)

## Instalação

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

### Mobile

```bash
cd mobile
npm install
npx expo start
```

## Executando o Projeto

### 1. Backend

```bash
cd backend

# Executar migrations
npm run migrate

# Desenvolvimento (com hot-reload)
npm run dev

# Produção
npm start
```

A API estará disponível em `http://localhost:3333`

### 2. Frontend

```bash
cd frontend
npm start
```

A aplicação estará disponível em `http://localhost:3000`

### 3. Mobile

```bash
cd mobile
npx expo start
```

Escaneie o QR Code com o app Expo (Android) ou Camera (iOS).

## Scripts Disponíveis

### Backend

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor em produção |
| `npm run dev` | Inicia com nodemon (desenvolvimento) |
| `npm run migrate` | Executa as migrations |
| `npm run migrate:rollback` | Reverte a última migration |

### Frontend

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm test` | Executa testes |
| `npm run eject` | Eject do Create React App |

### Mobile

| Script | Descrição |
|--------|-----------|
| `npx expo start` | Inicia o Metro bundler |
| `npx expo start --android` | Inicia para Android |
| `npx expo start --ios` | Inicia para iOS |
| `npx expo start --web` | Inicia versão web |
| `npx expo eject` | Eject para React Native CLI |

## API Endpoints

### Sessões
- `POST /sessions` - Autenticar ONG

### ONGs
- `GET /ongs` - Listar todas as ONGs
- `POST /ongs` - Cadastrar nova ONG

### Casos
- `GET /incidents` - Listar casos (paginado)
- `POST /incidents` - Criar novo caso
- `DELETE /incidents/:id` - Deletar caso

### Perfil
- `GET /profile` - Casos da ONG logada

## Configurações de Ambiente

### Backend (produção)

```env
DB_NAME=bethehero
DB_USER=postgres
DB_PASSWORD=sua_senha
PORT=3333
```

### Mobile

O IP do backend está configurado em `mobile/src/services/api.js`. 
Atualize para o IP da sua máquina na rede local.

## Boas Práticas Implementadas

- [x] ES Modules no backend
- [x] React Hooks modernos
- [x] React Router v6
- [x] Native Stack Navigator (mobile)
- [x] Separação de responsabilidades (controllers)
- [x] Migrations para versionamento do banco

## Próximas Melhorias Sugeridas

1. **TypeScript** - Adicionar tipagem estática
2. **Prisma** - Substituir Knex por ORM mais moderno
3. **Fastify** - Backend mais performático
4. **TanStack Query** - Gerenciamento de estado servidor
5. **Context API + useReducer** - Estado global
6. **Jest/Testing Library** - Testes automatizados
7. **ESLint + Prettier** - Padronização de código
8. **Docker** - Containerização

## Solução de Problemas

### Backend não inicia

Verifique se as dependências estão instaladas:
```bash
cd backend && npm install
```

### Mobile não conecta ao backend

O IP em `mobile/src/services/api.js` deve apontar para a máquina onde o backend está rodando.

### Erro de migrations

Delete o banco e recrie:
```bash
rm backend/src/database/db.sqlite
npm run migrate
```
