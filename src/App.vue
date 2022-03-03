<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">To do List by Vue</a>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="form-floating mb-3">
        <form @submit.prevent="addNewTodo" class="form">
          <input
            type="text"
            class="form-control"
            placeholder="Place your to do..."
            v-model="newTodo"
          />
          <button type="submit" class="btn btn-info">+</button>
        </form>
      </div>
      <div
        :class="['alert', todo.done ? 'alert-success' : 'alert-primary']"
        role="alert"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <p>{{ index }} - {{ todo.title }}</p>
        <div class="icon_content">
          <i class="fas fa-trash" @click="deleteTodo(index)"></i>
          <i class="fas fa-check" v-if="checked" @click="doneTodo(index)"></i>
        </div>
      </div>
    </div>
    <footer class="fixed-bottom navbar-light bg-info">
      <div class="container-fluid footer-copy_content">
        <a
          class="navbar-brand footer_brand"
          href="michaelxk.com"
          target="_blank"
        >
          &copy; by Michaelxk
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
// import db from "./firebase/config";

export default {
  name: "App",
  data: () => ({
    todos: [],
    newTodo: "",
    checked: true,
  }),
  created() {
    let todosDB = JSON.parse(localStorage.getItem("todos"));
    if (todosDB === null) {
      this.todos = [];
    } else {
      this.todos = todosDB;
    }

    console.log(todosDB);
  },
  methods: {
    updateStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addNewTodo() {
      if (this.newTodo === null || this.newTodo === "") {
        alert("Please enter a todo");
        return;
      } else {
        this.todos.push({
          title: this.newTodo,
          done: false,
        });
        this.updateStorage();
        this.newTodo = "";
      }
    },
    doneTodo(index) {
      this.todos[index].done = true;

      if (this.todos[index].done === true) {
        console.log("yeah");
        let icon_done = document.querySelectorAll(".fa-check");
        icon_done[index].classList.add("remove_icon-done");
      }

      this.updateStorage();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.updateStorage();
    },
  },
};
</script>

<style lang="scss">
.form-floating {
  margin-top: 8em;
}

.form {
  display: flex;
}

.btn-info {
  margin-left: 0.5em;
}

.alert-primary,
.alert-success {
  display: flex;
  justify-content: space-between;
}

.icon_content .fas {
  margin-left: -3em;
  cursor: pointer;
}
.remove_icon-done {
  display: none;
}
.footer-copy_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer_brand {
  font-size: 0.8em;
}
</style>
