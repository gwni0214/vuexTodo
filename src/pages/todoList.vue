<template>
    <div class="list-wrap">
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in todoItems" :key="index">
                <!-- 체크 -->
                <span class="list__check-field">
                    <i class="icon-checkmark"
                    v-show="todoItem.isChecked"
                    ></i>
                </span>
                <div class="list__text-field"
                v-show="!toFix || checked !== index"
                @click="checkShow(index)"
                >
                    {{ todoItem.id }}
                </div>
                <!-- 수정하기 인풋 -->
                <input type="text" placeholder="수정할 내용을 입력하세요" v-model="$store.state.fixItem"
                v-show="toFix && checked === index"
                @keyup.enter="changeItem(index)"
                >
                <!-- 버튼그룹 -->
                <div class="button-group">
                    <!-- 수정하기 -->
                    <span class="button-group__fix" @click="changeItem(index)">
                        <i class="icon-wrench"></i>
                    </span>
                    <!-- 삭제하기 -->
                    <span class="button-group__remove" @click="checkedItem(index)">
                        <i class="icon-bin"></i>
                    </span>
                </div>
                <ModalPop
                v-if="modal && checked === index"
                ></ModalPop>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    computed: {
        todoItems(){
            return this.$store.state.todoItems;
        },
        checked(){
            return this.$store.state.checked;
        },
        modal(){
            return this.$store.state.modal;
        },
        toFix(){
            return this.$store.state.toFix;
        }
    },
    methods: {
        checkedItem(index){
            this.$store.state.modal = true;
            this.$store.state.checked = index;                       
        },
        changeItem(index){
            this.$store.state.checked = index;            
            this.$store.commit('changeItem');
        },
        checkShow(index){
            this.$store.state.checked = index;
            this.$store.commit('checkShow');
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-bin {
        color: red;
        font-size: 2rem;
    }
    .icon-checkmark {
        color: green;
        font-size: 2rem;
    }
    .icon-wrench {
        color: green;
        font-size: 2rem;
    }
    .list-enter-active, .list-leave-active {
        transition: opacity 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
    }
    ul {
        list-style: none;
        li {
            min-height: 3rem;
            height: 3rem;
            margin: 2rem 0;
            background-color: #fff;
            border-radius: 0.3rem;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .list__check-field {
                width: 5%;
            }
            .list__text-field {
                width: 50%;
                white-space: nowrap;
                margin-left: 1rem;
                font-size: 2rem;
                cursor: pointer;
            }
            .button-group {
                width: 5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &__remove {
                    cursor: pointer;
                }
                &__fix {
                    cursor: pointer;
                }
            }
            input {
                border-style: none;
                font-size: 1rem;
                margin: 0 auto;
            }
        }
    }
    //미디어쿼리
    @media screen and (max-width: 1025px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 50%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {                   
                    font-size: 1.3rem;
                }
            }
        }
    }
    @media screen and (max-width: 599px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 50%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {                   
                    font-size: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 320px) {
        ul {            
            li {
                min-height: 5rem;
                height: 5rem;
                margin: 2rem 0;                
                border-radius: 0.3rem;
                padding: 0 2rem;                
                .list__check-field {
                    width: 5%;
                }
                .list__text-field {
                    width: 30%;                    
                    margin-left: 1rem;
                    font-size: 2rem;                    
                }
                .button-group {
                    width: 5rem;                    
                }
                input {
                    width: 100%;                                     
                    font-size: 1rem;
                }
            }
        }
    }
</style>