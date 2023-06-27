// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostname: "http://localhost:8080",
  pagesUrl: {
    "login": "login",
    "signin": "signin",
    "vetrina": "vetrina",

    "admin": "admin",
    "gestione_dipendenti": "admin/dipendenti",
    "gestione_prodotti": "admin/prodotti",
    "registro": "admin/registro"
  }
};
