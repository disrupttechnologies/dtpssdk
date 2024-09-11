
# DTPS SDK  
This SDK is a TypeScript-based wrapper for DTPS partner’s APIs.

## Installing

```bash
npm install dtpssdk
yarn add dtpssdk
```

## Getting Started
### Import

```bash
// ES5 example - 
const { DTPSClient } = require("dtpssdk");
```

```bash
// ES6+ example -
import { DTPSClient } from "dtpssdk";
```

### Usage

Initiate client with configuration (url, apiKey, apiSecret)

```bash
const dtpsClient = new DTPSClient().init({
    url,
    apiKey,
    apiSecret,
})
```

Use client instance and call functions based on module

```bash
// async/await

try {
  const cards = await dtpsClient.<module>.<function_name>();
  // process cards.
} catch (error) {
  // error handling.
}
```

Available Module <module> -
```bash
card
user 
```