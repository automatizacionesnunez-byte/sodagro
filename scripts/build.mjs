import { build } from "astro";

async function run() {
  try {
    console.log("Iniciando compilacion de produccion para Cloudflare Pages...");
    await build({});
    console.log("Compilacion completada con exito.");
  } catch (error) {
    console.error("Error durante la compilacion:", error);
    process.exit(1);
  }
}

run();
