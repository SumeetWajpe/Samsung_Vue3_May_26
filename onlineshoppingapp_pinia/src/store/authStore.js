import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(username, password) {
      // make an api call
      if (username == "admin" && password == "admin") {
        this.isAuthenticated = true;
        this.user = { username: username, role: "Administrator" };
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
  getters: {
    username: state => state.user?.username || "",
  },
});
