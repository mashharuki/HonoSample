import { zValidator } from '@hono/zod-validator';
import { Context, Hono, } from 'hono';
import { z } from 'zod';
import { signMessage, verifySignature } from './lib/ecdsa';
import { mockDB } from './lib/mockDB';

type HonoConfig = {
  Bindings: {
    DB: any;
  };
};

const app = new Hono<HonoConfig>();

// 環境変数にモックデータベースを設定
app.use(async (c, next) => {
  c.env.DB = mockDB;
  await next();
});

/**
 * デフォルトAPIメソッド
 */
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Signing Endpoint
app.post(
  '/sign',
  zValidator('json', z.object({ message: z.string() })),
  async (c: Context<HonoConfig>) => {
    // Extract the message from the request body
    const { message } = c.req.valid('json');

    console.log('message:', message);

    try {
      // Retrieve the private key from the database
      const { 
        results 
      }: { 
        results: { 
          privateKey: string 
        }[] 
      } = await c.env.DB.prepare(`SELECT privateKey FROM KeyPair WHERE id = ?`).bind('1').all();
      // 秘密鍵を取得
      const privateKey = results[0].privateKey;
      // 署名処理実行
      const signature = await signMessage(message, privateKey);

      console.log('signature:', signature);

      return c.json({ signature });
    } catch (e: any) {
      return c.json({ err: e.message }, 500);
    }
  }
);

// Verification Endpoint
app.post(
  '/verify',
  zValidator('json', z.object({ message: z.string(), signature: z.string() })),
  async (c: Context<HonoConfig>) => {
    const { message, signature } = c.req.valid('json');

    try {
      // 公開鍵を取得
      const { 
        results 
      }: { 
        results: { publicKey: string }[] 
      } = await c.env.DB.prepare(`SELECT publicKey FROM KeyPair WHERE id = ?`).bind('1').all();
      
      const publicKey = results[0].publicKey;

      const valid = await verifySignature(message, signature, publicKey);

      return c.json({ valid });
    } catch (e: any) {
      return c.json({ err: e.message }, 500);
    }
  }
);

export default app
