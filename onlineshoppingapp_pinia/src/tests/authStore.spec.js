import {
  describe,
  it,
  test,
  expect,
  toBe,
  beforeEach,
  afterEach,
} from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "../store/authStore";

describe("test suites for AuthStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("logs in successfully", () => {
    const store = useAuthStore();
    const result = store.login("admin", "admin");
    expect(result).toBe(true);
  });
});
