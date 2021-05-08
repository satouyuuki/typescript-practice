<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld 
      :obj="obj"
      :arr="arr"
    />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/AppTodoList.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld,
    TodoList
  },
  data: () => ({
    obj: {name: 'taro'},
    arr: [
      {task: 'todo'}
    ]
  })
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
