<template>
    <div class="clear">
        <span class="clear-button" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            this.$store.commit("clearTodo");
        }
    }
}
</script>

<style lang="scss" scoped>
    .clear {
        width: 10rem;
        height: 5rem;
        line-height: 5rem;
        background-color: #fff;
        border-radius: 0.5rem;
        margin: 2rem auto;
        cursor: pointer;
        &-button {
            color: #e20303;
            display: block;
            user-select: none;
            font-size: 2rem;
        }
    }
    @media  screen and (max-width: 1025px) {
       .clear {
            width: 10rem;
            height: 5rem;
            line-height: 5rem;
            border-radius: 0.5rem;
            margin: 2rem auto;

            &-button {
                font-size: 2rem;
            }
        }
   }
   @media  screen and (max-width: 599px) {
           .clear {
            width: 10rem;
            height: 4rem;
            line-height: 4rem;
            border-radius: 0.5rem;
            margin: 2rem auto;

            &-button {
                font-size: 2rem;
            }
        }
   }
   @media  screen and (max-width: 320px) {
           .clear {
            width: 10rem;
            height: 3rem;
            line-height: 3rem;
            border-radius: 0.5rem;
            margin: 2rem auto;

            &-button {
                font-size: 1.5rem;
            }
        }
   }
</style>