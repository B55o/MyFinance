import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app // eslint-disable-line @typescript-eslint/no-unused-vars
    .route("/accounts", accounts);

app.get("hello", (c) => {
    return c.json({ hello: "world" });
});

app.onError((err, c) => {
    if (err instanceof HTTPException) {
        return err.getResponse();
    }

    return c.json({ error: "internal error" }, 500);
});

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
