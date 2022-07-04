<template>
    <div class="modal">
        <div class="modal-cont">
            <div class="modal-cont__text">
                <span>데이터를 삭제하시겠습니까?</span>
                <div class="modal-cont__yes" @click="modalRemove">
                    <i class="icon-checkmark"></i>
                </div>
                <div class="modal-cont__close" @click="modalClose">
                    <i class="icon-cross"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        modalClose(){
            this.$store.commit('modalClose');
        },
        modalRemove(){
            this.$store.commit('modalRemove');
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-checkmark {
        color: green;
        font-size: 2rem;
    }
    .icon-cross {
        color: red;
        font-size: 2rem;
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        &-cont {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20rem;
            height: 30rem;
            background-color: #fff;
            &__text {
                span {
                    display: block;
                    margin-bottom: 2rem;
                }
            }
            &__yes {
                margin-bottom: 2rem;
                cursor: pointer;
            }
            &__close {
                cursor: pointer;
            }
        }
    }
</style>