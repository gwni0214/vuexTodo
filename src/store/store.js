import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newTodoItem: "",
        todoItems: [],
        toast: false,
        checked: 0,
        modal: false,
        toFix: false,
        fixItem: "",
    },
    getters: {

    },
    mutations: {
        //데이터 추가하기
        addTodo(state){
            // console.log(JSON.stringify(state.newTodoItem));
            if(state.newTodoItem !== ""){
                let value = 
                    {
                        id: state.newTodoItem,
                        time: new Date,
                        isChecked: false
                    }                            
                localStorage.setItem(JSON.stringify(value),JSON.stringify(value));
                state.todoItems.push(value);
                // console.log(JSON.stringify(state.todoItems));
                state.newTodoItem = "";
            } else {
                //토스트팝업 함수
                state.toast = true;
                setTimeout(()=>{
                    state.toast = false;
                },1000);
            }          
        },
        //전부 삭제하기
        clearTodo(state){
            localStorage.clear();
            state.todoItems = [];
        },
        //created
        createdPush(state){
            if(localStorage.length > 0){
                for(let i = 0; i < localStorage.length; i++){
                    let key = localStorage.key(i);
                    // console.log(key);
                    if(key !== 'loglevel:webpack-dev-server'){                    
                        state.todoItems.push(JSON.parse(key));
                    }
                }
            }            
            //시간순으로 정렬
            state.todoItems.sort(function(a,b){return new Date(a.time) - new Date(b.time)});
            // console.log(JSON.parse(JSON.stringify(state.todoItems)));
        },       
        //수정하기
        changeItem(state){            
            state.toFix = !state.toFix;
            let index = state.checked;
            let indexItem = JSON.parse(JSON.stringify(state.todoItems[index]));
            console.log(index);
            if(state.fixItem !== ""){
                let value = 
                    {
                        id: state.fixItem,
                        time: new Date,
                        isChecked: false
                    };
                localStorage.removeItem(JSON.stringify(indexItem));
                state.todoItems.splice(index, 1);
                localStorage.setItem(JSON.stringify(value),JSON.stringify(value));
                state.todoItems.push(value);
                state.fixItem = "";
            }
        },
        //체크하기
        checkShow(state){
            let checkingIndex = [];
            let index = state.checked;
            let indexItem = JSON.parse(JSON.stringify(state.todoItems[index]));
            if(indexItem.isChecked == false){
                indexItem.isChecked = true;
                checkingIndex.push(indexItem);
            } else {
                indexItem.isChecked = false;
                checkingIndex.push(indexItem);
            }
            state.todoItems.splice(index, 1, checkingIndex[0]);
        },
        //모달 클로즈
        modalClose(state){
            state.modal = false;
        },
        //모달 리무브
        modalRemove(state){
            // console.log(state.checked);
            let index = state.checked;
            let indexItem = JSON.parse(JSON.stringify(state.todoItems[index]));
            // console.log(indexItem);
            localStorage.removeItem(JSON.stringify(indexItem));
            state.todoItems.splice(index, 1);
            state.modal = false;
        }                 
    },
   
})