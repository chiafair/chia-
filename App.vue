<script setup>
//在vue中创建任何一个变量都要用ref包裹起来
import { ref } from "vue";

const value = ref("");
const list = ref([
  {
    isComplete: false,
    text: "睡觉",
  },
  {
    isComplete: false,
    text: "吃饭",
  },

  {
    isComplete: true,
    text: "跑步",
  },
]);

function add() {
  list.value.push({
    isComplete: false,
    text: value.value,
  });

  value.value = "";
}
function del(index) {
  list.value.splice(index, 1);
}
</script>

<template>
  <div class="input">
    <h1>Todo App</h1>
    <div class="todo-form">
      <!-- v-model="value" 可以使输入框里的值保存到value 里 -->
      <input
        v-model="value"
        type="text"
        class="todo-input"
        placeholder="Add a todo"
      />
      <div @click="add" class="todo-button">add todo</div>
    </div>
    <div
      v-for="(item, index) in list"
      :class="[item.isComplete ? 'completed' : 'item']"
    >
      <div>
        <input v-model="item.isComplete" type="checkbox" />
        <span class="name">{{ item.text }}</span>
      </div>
      <div @click="del(index)" class="del">del</div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: linear-gradient(
    to right,
    rgb(113, 65, 168),
    rgb(44, 114, 251, 1)
  );
}
h1 {
  text-align: center;
  margin-top: 10px;
}
.input {
  width: 98%;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 1px;
}
.todo-form {
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
}
.todo-input {
  padding-left: 15px;
  border: 1px solid #eae5e5;
  outline: none;
  width: 60%;
  height: 50px;
  border-radius: 20px 0 0 20px;
}
.todo-button {
  width: 100px;
  height: 52px;
  border-radius: 0 20px 20px 0;
  background: linear-gradient(
    to right,
    rgb(113, 65, 168),
    rgb(44, 114, 251, 1)
  );
  text-align: center;
  line-height: 52px;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 50px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgb(149, 157, 165, 0.2) 0px 8px 20px;
}
.completed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 50px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgb(149, 157, 165, 0.2) 0px 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
}
.del {
  color: red;
}
</style>
