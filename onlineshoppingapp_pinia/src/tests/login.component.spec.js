import {
  describe,
  it,
  test,
  expect,
  toBe,
  beforeEach,
  afterEach,
  vi,
} from "vitest";
import Login from "../components/Login.vue";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { jest } from "jest";


describe("Login Component suites", () => {
  it("renders the login form", () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(wrapper.text()).toContain("Login");
  });
});
