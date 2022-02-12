import test from "ava";
import { Client } from ".";

test("should pass", (t) => {
  t.pass();
});

test("should export client", (t) => {
  t.truthy(Client);
});
