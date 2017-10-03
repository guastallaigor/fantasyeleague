# Front

## Sobre
Front da aplicação, foi decidido a organização por modulos, então **siga os padrões** para que haja um bom entendimento sobre a estrutura, também utilizamos um [guia de estilo para código](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md) que também segue ótimos padrões e é muito utilizado.

## Instalação
Para iniciar o desenvolvimento, instale as dependências com o comando abaixo, é necessário possuir o bower instalado globalmente.

```sh
bower i
```

Após a instalação, é recomendado o uso de um servidor HTTP para utilização das rodas e do bom funcionamento da aplicação, para desenvolvimento utilize o [http-server](https://www.npmjs.com/package/http-server).

Caso não tenha ele instalado globalmente, rode o comando abaixo.
```sh
npm install -g http-server
```

Para iniciar, entre na raiz do projeto e rode o comando abaixo.
```sh
http-server
```

## Fluxo de versionamento e deploy
Atualmente a branch **master** é a que reflete o código em produção, que possuí integração continua através de um job do nosso [Jenkins](fantasyeleague.me:9000), o merge para master só deve ser feito pela branch develop.
