<template>
  <div class="container">
    <completed-todos></completed-todos>
    <get-todo></get-todo>
    <current-todos></current-todos>
  </div>
</template>

<script>
  import CompletedTodos from './CompletedTodos'
  import GetTodo from './GetTodo'
  import CurrentTodos from './CurrentTodos'

  export default {
    components: {
      CompletedTodos,
      GetTodo,
      CurrentTodos
    }
  }
</script>