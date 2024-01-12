class DemoButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const button = document.createElement('button');
      button.textContent = 'Click me';
  
      button.addEventListener('click', () => {
        console.log('Button clicked!');
      });
  
      this.shadowRoot.appendChild(button);
    }
  }
  
  customElements.define('demo-button', DemoButton);
  
  window.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.createElement('demo-button');
    document.body.appendChild(demoButton);
  });