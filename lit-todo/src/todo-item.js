import { LitElement, html } from 'lit';

export class TodoItem extends LitElement {
  static properties = {
    todo: { type: Object }
  };

  toggle() {
    this.dispatchEvent(new CustomEvent('toggle', {
      detail: this.todo.id,
      bubbles: true,
      composed: true
    }));
  }

  deleteTodo() {
    this.dispatchEvent(new CustomEvent('delete', {
      detail: this.todo.id,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <li>
        <span
          @click=${this.toggle}
          style="cursor:pointer; text-decoration:${this.todo.done ? 'line-through' : 'none'}"
        >
          ${this.todo.title}
        </span>

        <button @click=${this.deleteTodo}>X</button>
      </li>
    `;
  }
}

customElements.define('todo-item', TodoItem);