<template>

    <div class="container mt-5">

        <div class="row justify-content-center">

            <div class="col-md-4">

                <div class="card shadow">

                    <div class="card-body">

                        <h3 class="text-center mb-4">
                            Login
                        </h3>

                        <!-- Username -->

                        <div class="mb-3">

                            <label class="form-label" for="txtUsername">
                                Username
                            </label>

                            <input type="text" class="form-control" id="txtUsername" v-model="username"
                                placeholder="Enter username" />

                        </div>

                        <!-- Password -->

                        <div class="mb-3">

                            <label class="form-label">
                                Password
                            </label>

                            <input type="password" class="form-control" v-model="password"
                                placeholder="Enter password" />

                        </div>

                        <!-- Login Button -->

                        <button class="btn btn-primary w-100" @click="handleLogin">
                            Login
                        </button>

                        <!-- Error -->

                        <div v-if="errorMessage" class="alert alert-danger mt-3">
                            {{ errorMessage }}
                        </div>

                        <!-- Demo Credentials -->

                        <div class="alert alert-info mt-3">

                            <strong>Demo Credentials</strong>

                            <br />

                            Username: admin

                            <br />

                            Password: admin

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>
<script setup>
import { ref } from "vue"
import { useAuthStore } from '../store/authStore';
import { useRouter } from "vue-router"
const username = ref('');
const password = ref('');
const errorMessage = ref('')

const authStore = useAuthStore();
const router = useRouter();
const handleLogin = () => {
    // handle login
    const success = authStore.login(username.value, password.value);
    if (success) {
        // route to /dashboard/products ???
        router.push("/dashboard/products")
    } else {
        errorMessage.value = "Invalid Credentials"
    }


}

</script>