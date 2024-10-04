<template>
    <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            jsondata: null,
            error: null
        };
    },
    mounted() {
        this.GetAllBookAPI();
    },
    methods: {
        async GetAllBookAPI() {
            try{
                const response = await axios.get('https://showbooks-w4ywbbiw5q-uc.a.run.app');
                this.jsondata = response.data;
                this.error = null;
            } catch (error) {
                console.error('Error fetching book count:', error);
                this.error = error;
                this.jsondata = null;
            }
        },
    },
};
</script>