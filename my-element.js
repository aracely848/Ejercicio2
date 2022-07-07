/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      data: Object
    };
  }

    constructor() {
    super();
    this.fetchData();
  }

  fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta => {
      return respuesta.json();
    })
    .then(data => {
      this.data = data.results;
      console.log(this.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return html`
     <style>
      h1 {
        font-size: 2rem;
        font-weight: normal;
        text-transform: uppercase;
        font-weight: 900;
        text-align: center;
      }

      span {
        color: #24aa91;
      }
      h2 {
        color: #83c9bf;
        text-align: center;
      }
      section {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
      div {
        padding: 10px;
        display: inline-block;
        width: 80%;
        background-color: #FFFFFF;
        margin: 4% 2%;
      }
      h3 {
        text-align: center;
      }
      img {
        width: 80%;
        height: auto;
        display:block;
        margin:auto;
      }
      p {
        text-align: center;
        font-size: 1rem;
      }
      
      </style>
    <h1>The <span>Rick and Morty </span> API</h1>
    <h2>LitElement</h2>
      <section>
          ${this.data.map(dato => html`
          <div>
            <h3>${dato.name}</h3>
            <img src=${dato.image}>
            <p>${dato.species} ${dato.status}</p>
          </div>`)}
      </section>
      <slot></slot>
    `;
  }


  
 
}

window.customElements.define('my-element', MyElement);
