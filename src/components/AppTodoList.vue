<template>
  <div>
    <p>TodoList</p>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem 
        :todo="todo"
      />
    </div>
    <Form />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TodoItem, {Todo} from './AppTodoItem.vue';
import Form from './Form.vue';

export type Data = {
  todos: Todo[]
}

export default Vue.extend({
  name: 'TodoList',
  components: {
    TodoItem,
    Form,
  },
  data: (): Data => ({
    /**
     * 二つ目 定義する
     */
    todos: []
  })
  // data: () => ({
    /**
     * data型を表現する方法１一番簡単
     */
    // firstName: '',
    // lastName: '',
    // doneTodos: null as null | boolean,
    // todos: [] as Array<{
    //   id: string
    //   task: string
    //   done: boolean
    // }>
  // })
})
</script>