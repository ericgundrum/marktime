import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { ColophoneComponent } from './colophone.component'

describe('ColophoneComponent', () => {
  let component: ColophoneComponent
  let fixture: ComponentFixture<ColophoneComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColophoneComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // ignore `<md-dialog-content>`
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ColophoneComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('must exist', () => {
    expect(component).toBeTruthy()
  })
})
