import { LitElement, html } from 'lit';
import './todo-item.js';

export class TodoList extends LitElement {
  static properties = {
    todos: { type: Array }
  };

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`
          <todo-item
            .todo=${todo}
            @toggle=${e =>
              this.dispatchEvent(new CustomEvent('toggle-todo', {
                detail: e.detail,
                bubbles: true,
                composed: true
              }))
            }
            @delete=${e =>
              this.dispatchEvent(new CustomEvent('delete-todo', {
                detail: e.detail,
                bubbles: true,
                composed: true
              }))
            }
          ></todo-item>
        `)}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);