import test from "node:test";
import assert from "node:assert/strict";

test("corporate mantiene la integración de contacto opt-in", () => {
  assert.equal(process.env.PUBLIC_CONTACT_ENDPOINT ?? "", "");
});
