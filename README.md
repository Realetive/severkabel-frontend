# severcabel

## Install

```bash
git clone git@github.com/realetive/severcabel.git
cd severcabel
cp .env.example .env
npm install
```

### Environment variables

Set/change the config in `.env` file.

## Usage

### Production

1. Run the builder:

```bash
NODE_ENV=production npm run make
```

2. Run server:

```bash
NODE_ENV=production npm start
```

### Develop

Start dev-server

```bash
npm run dev
```

#### Debug

1. For check api response for page, add `json=1` param to URL, for example: http://localhost:3000/?json=1
2. For check bemjson structure, add `bemjson=1` param to URL, for example: http://localhost:3000/?bemjson=1
