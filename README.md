# Re-Stumbled Ticket Bot

## Setup

1. `npm install`
2. Edite o `config.json` com seu token e IDs
3. `node index.js`

## config.json

```json
{
  "token": "SEU_TOKEN",
  "clientId": "ID_DO_BOT",
  "prefix": ".",
  "staffRoleId": "ID_CARGO_STAFF",
  "adminRoleId": "ID_CARGO_ADMIN",
  "logChannelId": "ID_CANAL_LOGS",
  "ticketCategoryId": "ID_CATEGORIA_TICKETS"
}
```

## Comandos

| Comando | Prefixo | Slash | Descrição |
|---|---|---|---|
| ticket | `.ticket` | `/ticket` | Envia painel de tickets |
| painel | `.painel` | `/painel` | Config do bot (admin) |
| fechar | `.fechar` | `/fechar` | Fecha ticket atual |
| assumir | `.assumir` | `/assumir` | Staff assume ticket |
| transcript | `.transcript` | `/transcript` | Gera transcript |
| adduser | `.adduser @user` | `/adduser` | Adiciona usuário |
| removeuser | `.removeuser @user` | `/removeuser` | Remove usuário |
| renomear | `.renomear nome` | `/renomear` | Renomeia canal |
| tickets | `.tickets` | `/tickets` | Lista tickets abertos |
| ping | `.ping` | `/ping` | Latência |
| ajuda | `.ajuda` | `/ajuda` | Lista comandos |

## Painel de Configuração (.painel)

Ao usar `.painel` ou `/painel`, aparece um embed com botões para editar:
- Título
- Descrição  
- Cor (hex)
- Thumbnail (URL tipo `cdn.discordapp.com/...`)
- Categorias (nome | emoji | descrição)
- Rodapé
