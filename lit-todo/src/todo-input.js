import { LitElement, html } from 'lit';

export class TodoInput extends LitElement {
  static properties = {
    value: { state: true }
  };

  constructor() {
    super();
    this.value = '';
  }

  updateValue(e) {
    this.value = e.target.value;
  }

  addTodo() {
    if (!this.value.trim()) return;

    this.dispatchEvent(new CustomEvent('add-todo', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));

    this.value = '';
  }

  render() {
    return html`
      <input
        .value=${this.value}
        @input=${this.updateValue}
        placeholder="Add todo..."
      />

      <button @click=${this.addTodo}>Add</button>
    `;
  }
}

customElements.define('todo-input', TodoInput);