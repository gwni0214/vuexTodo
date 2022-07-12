<template>
    <div>
        <todoHeader></todoHeader>
        <todoSearch></todoSearch>
        <todoInput></todoInput>
        <todoList></todoList>
        <todoFooter></todoFooter>
        <DayAndNight></DayAndNight>
        
    </div>    
</template>

<script>
export default {
    data(){
        return {
           
        }
    },   
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

