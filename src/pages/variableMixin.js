const variableMixin = {
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
        },
        search(){
            return this.$store.state.search;
        },
         
    }
}
export default variableMixin;