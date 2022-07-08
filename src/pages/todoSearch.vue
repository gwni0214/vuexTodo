<template>
    <div class="todo-search">
        <div class="todo-search__box">
            <input type="text" placeholder="검색어를 입력해주세요." v-bind:value="searchItem" @input="updateInput" @keyup="searchTodo">            
        </div>        
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchItem: ""
        }
    },    
    methods: {        
        updateInput(e){
            this.searchItem = e.target.value;
        },
        searchTodo(){
            let item = this.searchItem            
            this.$store.commit('searchTodo', item);
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-search {
    margin-bottom: 2rem;
    &__box {
        background-color: rgb(155, 235, 155);
        height: 3rem;
        line-height: 3rem;
        border-radius: 0.3rem;
        input {                       
            border-style: none;
            font-size: 1.3rem;
            padding: 0.3rem;
        }
        input::placeholder {
            color: green;
        }        
    }
}
@media screen and (max-width: 320px) {
    .todo-search {            
        &__box {
            display: flex;
            justify-content: space-between;             
            height: 3rem;
            line-height: 3rem;
            border-radius: 0.3rem;
            input {
                width: 100%;
                font-size: 1.5rem;                    
            }           
        }
    }
}
</style>