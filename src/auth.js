import { ref } from 'vue';

// Create a global reactive state for authentication
export const isAuthenticated = ref(false);

export function login() {
    isAuthenticated.value = true;
    alert("You are loged in");
}

export function logout() {
    isAuthenticated.value = false;
    alert("You are loged out")
}