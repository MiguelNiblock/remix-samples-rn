import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { NativeBaseProvider } from "native-base";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <NativeBaseProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NativeBaseProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
