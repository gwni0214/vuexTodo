<template>
    <div>
        <todoHeader></todoHeader>
        <todoInput></todoInput>
        <todoList></todoList>
        <todoFooter></todoFooter>
    </div>
    
</template>

<script>
export default {   
    created(){
         this.createdPush();
    },  
    methods: {
        createdPush(){
            this.$store.commit("createdPush")
        }
    }
}
</script>