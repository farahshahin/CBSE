import { LitElement, html } from 'lit';
import './todo-input.js';
import './todo-list.js';

export class TodoApp extends LitElement {
  static properties = {
    todos: { state: true }
  };

  constructor() {
    super();
    this.todos = [];
  }

  addTodo(e) {
    this.todos = [
      ...this.todos,
      { id: Date.now(), title: e.detail, done: false }
    ];
  }

  toggleTodo(e) {
    this.todos = this.todos.map(t =>
      t.id === e.detail ? { ...t, done: !t.done } : t
    );
  }

  deleteTodo(e) {
    this.todos = this.todos.filter(t => t.id !== e.detail);
  }

  render() {
    return html`
      <h2>Todo App</h2>

      <todo-input @add-todo=${this.addTodo}></todo-input>

      <todo-list
        .todos=${this.todos}
        @toggle-todo=${this.toggleTodo}
        @delete-todo=${this.deleteTodo}
      ></todo-list>
    `;
  }
}

customElements.define('todo-app', TodoApp);