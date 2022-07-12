<template>
    <transition name="pop" tag="div">
        <div class="toast" v-if="toast">
            <div class="toast__text">
                <span>할 일을 입력해주세요!!</span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        toast(){
            return this.$store.state.toast;
        }
    }
}
</script>

<style lang="scss" scoped>
    .pop-enter-active, .pop-leave-active {
        transition: all 1s;
    }
    .pop-enter, .pop-leave-to {
        opacity: 0;        
    }
    .toast {
        position: fixed;
        top: 22%;
        left: 70%;
        transform: translate(-50%, -50%);
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        &__text {
            span {
                color: red;
            }
        }
    }
    @media screen and (max-width: 1025px) {
        .toast {
            top: 22%;
            left: 80%;
         
        }
    }
    @media screen and (max-width: 599px) {
        .toast {
            top: 18%;
            left: 70%;
           
        }
    }
    @media screen and (max-width: 320px) {
       .toast {
            top: 25%;
            left: 50%;
         
        } 
    }
</style>