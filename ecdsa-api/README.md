To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

- ローカル上に DB を作成する方法

  ```bash
  wrangler d1 execute firstd1 --local --file=./schema.sql
  ```

  下記 SWL で本当に作成できたか確認が可能

  ```bash
  wrangler d1 execute firstd1 --local --command='SELECT * FROM KeyPair'
  ```
