import { HandlerContext } from "$fresh/server.ts";
import { dhash } from "https://deno.land/x/dhash@v0.0.2/mod.ts";
import { multiParser } from "https://deno.land/x/multiparser@0.114.0/mod.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  const form = await multiParser(req);
  const files = form?.files;
  const image = files?.image;
  if (!image || Array.isArray(image)) {
    return new Response("No image found");
  }

  const hash = await dhash(image.content);
  return new Response(JSON.stringify({ hash }), {
    headers: new Headers([["Content-Type", "application/json"]]),
  });
};
