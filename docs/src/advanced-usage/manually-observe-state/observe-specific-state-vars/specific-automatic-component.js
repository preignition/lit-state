import { customElement, LitElement, html } from 'lit-element';
import { demoComponentStyle } from '@app/demo-component.js';
import { observeState } from '@app/lit-state.js';
import { demoState } from './state';
import 'lit-docs';


@customElement('specific-automatic-component')
export class SpecificAutomaticComponent extends observeState(demoComponentStyle(LitElement)) {

    render() {

        return html`

            <showcase-box>

                <h2>&lt;automatic-component&gt;</h2>

                <h3 class="value">Counter1: ${demoState.counter1}</h3>
                <button @click=${this.handleIncreaseCounter1ButtonClick}>increase counter</button>

                <h3 class="value">Counter2: ${demoState.counter2}</h3>
                <button @click=${this.handleIncreaseCounter2ButtonClick}>increase counter</button>

            </showcase-box>

        `;

    }

    handleIncreaseCounter1ButtonClick() {
        demoState.counter1++;
    }

    handleIncreaseCounter2ButtonClick() {
        demoState.counter2++;
    }

}
