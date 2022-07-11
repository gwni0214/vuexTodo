import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {        
        todoItems: [],
        toast: false,
        checked: 0,
        modal: false,
        toFix: false,
        fixItem: "",
        test: true,
        
    },
    getters: {

    },
    actions: {
        //비동기 호출하기
        TIME({commit}){
            return setTimeout(()=> {
                commit('testFunc');
            },2000)
        }
    },
    mutations: {
        testFunc(state){
            state.test = !state.test;
        },
        //검색하기
        searchTodo(state, payload){                       
            let arr = JSON.parse(JSON.stringify(state.todoItems));                
            if(payload !== ""){               
                arr.forEach(element => {                    
                    if(!element.id.includes(payload)){                        
                        let index = arr.indexOf(element);                        
                        element.search = false;
                        let searchedArr = [];
                        searchedArr.push(element);                        
                        state.todoItems.splice(index,1,searchedArr[0]);
                    } else {
                        let index = arr.indexOf(element);                        
                        element.search = true;
                        let searchedArr = [];
                        searchedArr.push(element);                        
                        state.todoItems.splice(index,1,searchedArr[0]);
                    }                        
                });
            } else {
                //input이 공백일때 전부 true                
                arr.forEach(el => {
                    let index = arr.indexOf(el);
                    el.search = true;
                    let searchedArr = [];
                    searchedArr.push(el);
                    state.todoItems.splice(index,1,searchedArr[0]);
                })
            }
        },
        //데이터 추가하기
        addTodo(state, payload){
            // console.log(JSON.stringify(state.newTodoItem));
            if(payload !== ""){
                let value = 
                    {
                        id: payload,
                        time: new Date,
                        isChecked: false,
                        search: true,
                    }                            
                localStorage.setItem(JSON.stringify(value),JSON.stringify(value));
                state.todoItems.push(value);
                // console.log(JSON.stringify(state.todoItems));                
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
            let fixedItem = [];
            console.log(index);
            if(state.fixItem !== ""){                
                
                //localStorage 데이터 삭제 (이게 먼저실행 되어야 함)
                localStorage.removeItem(JSON.stringify(indexItem));

                //데이터 수정
                indexItem.id = state.fixItem;                
                fixedItem.push(indexItem);

                //localStorage 수정된 데이터 추가
                localStorage.setItem(JSON.stringify(fixedItem[0]), JSON.stringify(fixedItem[0]));
                //todoItems 배열의 순서 지키기.              
                state.todoItems.splice(index, 1, fixedItem[0]);
            }
        },
        //체크하기
        checkShow(state){
            let checkingIndex = [];
            let index = state.checked;
            let indexItem = JSON.parse(JSON.stringify(state.todoItems[index]));
            if(indexItem.isChecked == false){
                //localStorage 데이터 삭제 (이게 먼저실행 되어야 함)
                localStorage.removeItem(JSON.stringify(indexItem));

                indexItem.isChecked = true;
                checkingIndex.push(indexItem);

                //localStorage 수정된 데이터 추가
                localStorage.setItem(JSON.stringify(checkingIndex[0]), JSON.stringify(checkingIndex[0]));
            } else {
                //localStorage 데이터 삭제 (이게 먼저실행 되어야 함)
                localStorage.removeItem(JSON.stringify(indexItem));

                indexItem.isChecked = false;
                checkingIndex.push(indexItem);

                //localStorage 수정된 데이터 추가
                localStorage.setItem(JSON.stringify(checkingIndex[0]), JSON.stringify(checkingIndex[0]));
            }
            state.todoItems.splice(index, 1, checkingIndex[0]);
        },
        //모달 클로즈
        modalClose(state){
            state.modal = false;
        },
        //선택한 아이템 삭제하기
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