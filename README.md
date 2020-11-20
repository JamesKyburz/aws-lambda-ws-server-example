# aws-lambda-ws-server-example

### usage

in AWS

```sh
npm i
serverless deploy
npx wscat -c url
> {"message": "echo", "hello": "world"}
< {"message":{"message":"echo","hello":"world"}}
```

or locally

```sh
npm i
node src/index
npx wscat -c ws://localhost:5000
> {"message": "echo", "hello": "world"}
< {"message":{"message":"echo","hello":"world"}}
```

# license
[Apache License, Version 2.0](LICENSE)
