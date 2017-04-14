import { Component } from '@angular/core'
import { MdDialog } from '@angular/material'

import { Mark } from './mark'
import { ColophoneComponent } from './colophone.component'
import * as colophone from '../../colophone'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  mark: Mark[] = []
  version = colophone().version

  constructor(private dialog: MdDialog) {}

  onExport(): string {
    if (!this.mark.length) { return '' }

    return this.mark
    .map(i => { return this.position(i) + '\t' + i.label })
    .join('\n')
  }
  onMark(): void { this.mark.push(new Mark()) }
  position(mark: Mark): string {
    if (!mark || !this.mark[0]) { return 'missed the mark' }
    return this.asHourMinSec(new Date(mark.position(this.mark[0])))
  }
  showColophone() {
    this.dialog.open(ColophoneComponent)
  }

  asHourMinSec(d: Date): string {
    return d.toUTCString().split(' ')[4]
  }
}
