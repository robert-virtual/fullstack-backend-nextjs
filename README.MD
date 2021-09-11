

# Session
1. sess: "key": { _userId:1 }

2. express-sessionh set a cookie on the browser "cookie" -> "jsdhjh45d4f54dg7d8f" 

3. cuando nel usuario hace una solicitud la "cookie" se envia al servidor
> "jsdhjh45d4f54dg7d8f" -> send to server

4. la cookie es desencryptada
> "jsdhjh45d4f54dg7d8f" -> sess: "key"

5. solicita valor de la clave a redis
sess: "key" -> { _userId }