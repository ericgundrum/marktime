import { Component } from '@angular/core'
import * as colophone from '../colophone'

@Component({
  selector: 'app-colophone',
  template: `
    <h1 md-dialog-title>Mark Time</h1>
    <md-dialog-content style="max-width: 29em">
    {{vers.description}}
    <a target="_blank" href="{{vers.homepage}}">^</a>
    <p>

    version {{vers.version}}<br/>
    copyright &copy;{{vers.year}} {{vers.author.name}}<br/>
    usage and <a target="_blank" href="{{vers.source}}">source code</a>
    governed by the
    <a target="_blank" href="https://spdx.org/licenses/{{vers.license}}.html">
      {{vers.license}} license
    </a>
    </md-dialog-content>
  `,
})
export class ColophoneComponent {
  vers = colophone

  constructor() {}
}
