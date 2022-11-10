# All In Front End

## Instalar dependencias

```bash
ubuntu@ip-172-31-24-248:~ $  git clone https://github.com/All-In-Network/all-in-frontend.git
ubuntu@ip-172-31-24-248:~ $  git clone https://github.com/All-In-Network/all-in-api.git

ubuntu@ip-172-31-24-248:~ $ cd ~/all-in-frontend && yarn install
ubuntu@ip-172-31-24-248:~ $ cd ~/all-in-api && yarn install
```

## Ejecutar el Frontend

```bash
ubuntu@ip-172-31-24-248:~ $ cd ~/all-in-frontend
ubuntu@ip-172-31-24-248:~/all-in-frontend/ $ yarn start
```

## Ejecutar el Websocket para obtener los datos del criptomercado

```bash
ubuntu@ip-172-31-24-248:~ $ cd ~/all-in-api
ubuntu@ip-172-31-24-248:~/all-in-api/ $ cp .env.sample .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ sed -in "s/HTTP_SERVER_PORT=\"\"/HTTP_SERVER_PORT=\"80\"/gm" .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ sed -in "s/CORS_ORIGINS=\"\"/CORS_ORIGINS=\"http:\/\/localhost:3000\"/gm" .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ sed -in "s/ALPACA_WSS_URL=\"\"/ALPACA_WSS_URL=\"wss:\/\/stream.data.alpaca.markets\/v1beta2\/crypto\"/gm" .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ sed -in "s/ALPACA_KEY=\"\"/ALPACA_KEY=\"${your Alpaca key}\"/gm" .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ sed -in "s/ALPACA_SECRET=\"\"/ALPACA_SECRET=\"${your Alpaca secret}\"/gm" .env
ubuntu@ip-172-31-24-248:~/all-in-api/ $ yarn start
```

## Direcciones de las aplicaciones

**Frontend:** [http://localhost:3000](http://localhost:3000)

**Websocket:** [http://localhost](http://localhost/)
