import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { NativeBaseProvider } from "native-base";

hydrate(
  <NativeBaseProvider>
    <RemixBrowser />
  </NativeBaseProvider>,
  document
);
