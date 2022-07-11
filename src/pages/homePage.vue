<template>
    <div>
        <todoHeader></todoHeader>
        <todoSearch></todoSearch>
        <todoInput></todoInput>
        <todoList></todoList>
        <todoFooter></todoFooter>
        <!-- <div>
            <button @click="clickBtn">토글</button>
            <div>
                <transition name="btn">
                <button v-show="data1">버튼1</button>                
                </transition>
                <transition name="btn">
                    <button v-show="data2">버튼2</button>                
                </transition>
            </div>
        </div> -->
        <div>
            <button @click="testFunc">{{ this.$store.state.test }}</button>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            // clicked: false,
            // data1: true,
            // data2: true
        }
    },   
    created(){
         this.createdPush();
    },  
    methods: {
        testFunc(){
            this.$store.dispatch('TIME');
        },
        // clickBtn(){            
        //     this.clicked = !this.clicked;
        //     console.log(this.clicked);
        //     if(this.clicked){
        //         this.data1 = false; this.data2 = false;
        //         setTimeout(() => {
        //             this.data1 = true;
        //         }, 400);
        //     } else {
        //         this.data1 = false; this.data2 = false;
        //         setTimeout(() => {                    
        //             this.data1 = true; this.data2 = true;
        //         }, 400);
        //     }            
        // },
        createdPush(){
            this.$store.commit("createdPush")
        }
    }
}
</script>

<style lang="scss" scoped>
    // .btn-enter-active, .btn-leave-active {
    //     transition: opacity 0.4s;
    // }
    // .btn-enter, .btn-leave-to {
    //     opacity: 0;
    // }
    // button {
    //     padding: 20px;
    //     margin: 20px;
    // }
</style>