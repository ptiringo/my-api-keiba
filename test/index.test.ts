import { expect, test } from 'vitest';
import { app } from '../src/index.js';

test('GET /', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('Hello Hono!')
})