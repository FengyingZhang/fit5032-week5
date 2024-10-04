<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }}</p>
        <ul v-if="names && names.length > 0">
            <li v-for="(name, index) in names" :key="index">{{ name }}</li>
        </ul>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            count: null,
            error: null,
            names: []
        };
    },
    methods: {
        async getBookCount() {
            try{
                const response = await axios.get('https://countbooks-w4ywbbiw5q-uc.a.run.app');
                const response_name = await axios.get('https://capitalizebooks-w4ywbbiw5q-uc.a.run.app');
                this.count = response.data.count;
                this.error = null;
                this.names = response_name.data.names || [];
            } catch (error) {
                console.error('Error fetching book count:', error);
                this.error = error;
                this.count = null;
                this.names = [];
            }
        },
    },
};
</script>