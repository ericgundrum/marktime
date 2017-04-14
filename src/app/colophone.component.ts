import { Component } from '@angular/core'
import * as colophone from '../../colophone'

@Component({
  selector: 'app-colophone',
  template: `
    <h1 md-dialog-title>Mark Time</h1>
    <md-dialog-content>
    <p>{{vers.description}}<br/>
    {{vers.homepage}}</p>

    version {{vers.version}}<br/>
    copyright &copy; {{vers.author.name}}<br/>
    usage and <a target="_blank" href="{{vers.source}}">source code</a>
    governed by the
    <a target="_blank" href="https://spdx.org/licenses/{{vers.license}}.html">
      {{vers.license}} License
    </a>
    </md-dialog-content>
  `,
})
export class ColophoneComponent {
  vers = colophone()

  constructor() {}
}
