import { LitElement, html } from 'lit-element';

export class Login extends LitElement {
  render() {
    return html`
    <style>
      @import "/src/css/lg.css"
    </style>
    <body>
    
    <div class="formulario">
      <h1>PUMAS DC</h1>
      <form method="post">
        <div class="username">
          <input type="text" required>
          <label>Nombre de usuario</label>
        </div>
        <div class="contraseña">
          <input type="password" required>
          <label>Contraseña</label>
        </div>
        <br>
        <br>
        <input type="submit" value="INGRESAR">
        <a href="#" class="recordar">Olvidó su contraseña?</a>
        <a href="2vista.html">Vista 1</a>
      </form>
    </div>
    </body>
    `;
  }
}

customElements.define('my-login', Login);