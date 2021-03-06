import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component'
import { ColophoneComponent } from './colophone.component'

@NgModule({
  declarations: [
    AppComponent,
    ColophoneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ ColophoneComponent ],
})
export class AppModule { }
