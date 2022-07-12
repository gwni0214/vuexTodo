<template>
    <div class="day-and-night">
        <button @click="testFunc">{{ this.$store.state.test }}</button>
    </div>
</template>

<script>
export default {
    methods: {
        testFunc(){
            this.$store.dispatch('TIME');
        },        
    }
    
}
</script>

<style lang="scss" scoped>
    .day-and-night {
        button {
            font-size: 2rem;
            padding: 1rem;
            background: #f5f5f2;
            border-style: none;
            border-radius: 1rem;
        }
    }
</style>