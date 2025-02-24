<template>
  <div class="todo-app">
    <h1 class="title">My To-Do List</h1>
    <div class="input-section">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
      />
      <button type="primary" @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>
        <div class="button-wrapper">
          <IconCheck />
          <button @click="toggleComplete(index)">
            {{ todo.completed ? "Undo" : "Complete" }}
          </button>
          <button @click="removeTodo(index)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconCheck from "@/assets/svgs/IconCheck.vue";

const newTodo = ref("");
const todos = ref([]);
const addTodo = () => {
  if (newTodo.value.trim() === "") return;
  todos.value.push({ text: newTodo.value, completed: false });
  newTodo.value = "";
};

const toggleComplete = (index) => {
  todos.value[index].completed = !todos.value[index].completed;
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.todo-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--clr-background);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 14px;
    color: var(--clr-gray-600);
  }

  .input-section {
    display: flex;
    gap: 14px;
    margin-bottom: 20px;

    input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border: 2px solid var(--clr-primary);
      border-radius: 10px;
      background-color: var(--clr-white);
      color: var(--clr-gray-600);

      &:focus {
        outline: none;
        border-color: var(--clr-cyan);
      }
    }

    button {
      padding: 14px;
      height: 50px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      line-height: 21px;
      background: var(--clr-primary);
      color: var(--clr-white);
      box-shadow: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--clr-cyan);
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: var(--clr-white);
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: var(--clr-gray-600);
    }

    .button-wrapper {
      display: flex;
      gap: 5px;

      button {
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        background: var(--clr-primary);
        color: var(--clr-white);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: var(--clr-cyan);
        }

        &:last-child {
          background: var(--clr-red);

          &:hover {
            background: var(--clr-orange);
          }
        }
      }
    }
  }

  .completed {
    text-decoration: line-through;
  }
}
</style>
