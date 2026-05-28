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
    expect(store.isAuthenticated).toBe(true);
    expect(store.user.username).toBe("admin");
  });

  it("fails for invalid credentials", () => {
    const store = useAuthStore();
    const result = store.login("wrong", "wrong");
    expect(result).toBe(false);
    expect(store.isAuthenticated).toBe(false);
  });
});
