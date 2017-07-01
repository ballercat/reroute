import test from "ava";
import uplink from "../src/uplink";

test("uplink", t => {
  t.is(typeof uplink, "function");
});
