

```
npm install 
node ./example-node/example.js
```

Please help to review the function in example.js 

from line 40 is the way to get public key

from line 49 is to sign transaction

according to lib/utils/signethtx.js.flow

signEthTx(
    session: Session,
    address_n: Array<number>,
    nonce: string,
    gas_price: string,
    gas_limit: string,
    to: string,
    value: string,
    data?: string,
    chain_id?: number
)