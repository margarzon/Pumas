import { LitElement, html } from 'lit-element';

export class Rows extends LitElement {
  render() {
    return html`
    <style>
      @import "/src/css/rows.css"
    </style>
    <body>
    
    <div class="row1">
        <div class="card">
            <h2>Actas</h2>
            <br>
            <img src="img/icon1.png" >
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Certificados</h2>
            <br>
            <img src="img/icon2.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Reuniones</h2>
            <br>
            <img src="img/icon3.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>

    <div class="row2">
        <div class="card">
            <h2>Asistencia</h2>
            <br>
            <img src="img/icon4.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Comunicación</h2>
            <br>
            <img src="img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Estado de cuenta</h2>
            <br>
            <img src="img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>
    `;
  }
}

customElements.define('my-rows', Rows);