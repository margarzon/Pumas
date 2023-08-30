import { LitElement, html } from 'lit-element';

export class Box extends LitElement {
  render() {
    return html`
    <style>
      @import "/src/css/box.css"
    </style>
    <div class="gray-box">
    <ul class="list">
        <!-- Elementos de la lista -->
        <li><img src="src/img/icon_football.png" alt="">Home</li>
        <li><img src="src/img/icon_football.png" alt="">Presidencia</li>
        <li><img src="src/img/icon_football.png" alt="">Presidencia</li>
        <li><img src="src/img/icon_football.png" alt="">Vice-presidencia</li>
        <li><img src="src/img/icon_football.png" alt="">Secretaria</li>
        <li><img src="src/img/icon_football.png" alt="">Tesoreria</li>
        <li><img src="src/img/icon_football.png" alt="">Revisoria fiscal</li>
        <li><img src="src/img/icon_football.png" alt="">Lista afiliados</li>
        <li><img src="src/img/icon_football.png" alt="">Lista jugadores</li>
        <li><img src="src/img/icon_football.png" alt="">Lista coach's</li>
    </ul>
    
</div>

    `;
  }
}

customElements.define('my-box', Box);