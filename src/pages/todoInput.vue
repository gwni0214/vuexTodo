<template>
    <div class="todo-input">
        <div class="todo-input__box">
            <input type="text" placeholder="할 일을 입력해주세요!" v-model="newTodoItem" @keyup.enter="addTodo">
            <span class="todo-input__box__add" @click="addTodo">
                <i class="icon-plus"></i>
            </span>
        </div>
        <ToastPop></ToastPop>
    </div>
</template>

<script>

export default {
    data(){
        return {
            newTodoItem: ""
        }
    },    
    methods: {
        addTodo(){
            let item = this.newTodoItem
            this.$store.commit('addTodo', item);
            this.newTodoItem = "";
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-plus {
    color: red;
}
.todo-input {
    &__box {
        background-color: #fff;
        height: 3rem;
        line-height: 3rem;
        border-radius: 0.3rem;
        input {
            border-style: none;
            font-size: 1.5rem;        
        }
        &__add {
            float: right;
            width: 3rem;
            background-color: pink;
            border-radius: 0 0.3rem 0.3rem 0;
            cursor: pointer;
        }
    }
}
@media screen and (max-width: 320px) {
    .todo-input {            
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
            &__add {
                width: 3rem;
                border-radius: 0 0.3rem 0.3rem 0;
            }
        }
    }
}
</style>