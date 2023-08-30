import { LitElement, html } from 'lit-element';

export class Header2 extends LitElement {
  render() {
    return html`
    <style>
      @import "/src/css/header.css"
    </style>
        <div class="container">
            <div class="inner-container">
                <label>Usuarios</label>
                <div class="circle"></div>
            </div>
        </div>

        
        <div class="dropdown">
            <div class="menu-icon">&#9776;</div>
            <ul class="menu">
                <li><a href="login.html">Vista 1</a></li>
                <li><a href="2davista.html">Vista 2</a></li>
                <li><a href="3ravista.html">Vista 3</a></li>
                <li><a href="4tavista.html">Vista 4</a></li>
                <li><a href="5tavista.html">Vista 5</a></li>
            </ul>
        </div>

    `;
  }
}

customElements.define('my-header', Header2);