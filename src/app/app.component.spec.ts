import { TestBed, async } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material'
import 'hammerjs'

import { AppComponent } from './app.component'
import { Mark } from './mark'

describe('AppComponent', () => {
  let app: AppComponent
  let fixture
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [ FormsModule, MaterialModule ],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    app = fixture.debugElement.componentInstance
  }))

  it('should create the app', async(() => {
    expect(app).toBeTruthy()
  }))
  it('must be created with an empty Mark array', () => {
    expect(app.mark.length).toBe(0)
  })
  describe('.onExport', () => {
    it('must return an empty string if there are no Marks', () => {
      expect(app.mark.length).toBe(0)
      expect(app.onExport()).toBe('')
    })
    it('must return a newline delimited list containing each Mark', () => {
      app.onMark()
      app.onMark()
      expect(app.mark.length).toBe(2)
      app.mark[1].adjust = 7
      expect(app.onExport().split('\n').length).toBe(2)
      expect(app.onExport().split('\n')[0]).not.toBe(app.onExport().split('\n')[1])
    })
    it('must show in each line the Mark position & label separated by a tab', () => {
      app.onMark()
      app.onMark()
      expect(app.mark.length).toBe(2)
      app.mark[0].label = 'first'
      app.mark[1].label = 'second'
      const list = app.onExport().split('\n')
      const item = list[1].split('\t')
      expect(item.length).toBe(2)
      expect(item[1]).toBe(app.mark[1].label)
    })
  })
  it('.onMark must create a new Mark and append it to the Mark array', () => {
    app.onMark()
    expect(app.mark.length).toBe(1)
    expect(app.mark[0]).toEqual(jasmine.any(Mark))
  })
  describe('.position', () => {
    describe('must return', () => {
      it('an error string if the input is not a Mark', () => {
        // tslint:disable-next-line:prefer-const
        let m: Mark
        expect(typeof app.position(m)).toBe('string')
        expect(app.position(m)).not.toMatch(/^\d\d:\d\d:\d\d$/)
      })
      it('an error string if the Mark array is empty', () => {
        const m = new Mark
        expect(app.mark.length).toBe(0)
        expect(typeof app.position(m)).toBe('string')
        expect(app.position(m)).not.toMatch(/^\d\d:\d\d:\d\d$/)
      })
      it('`00:00:00` if the input is the first Mark with no adjustment', () => {
        app.onMark()
        expect(app.mark.length).toBe(1)
        expect(app.position(app.mark[0])).toBe('00:00:00')
      })
      it('a string formatted as `hh:mm:ss`', () => {
        app.onMark()
        expect(app.mark.length).toBe(1)
        app.mark[0].adjust = 7
        expect(app.position(app.mark[0])).toMatch(/^\d\d:\d\d:\d\d$/)
      })
      it('the time difference between the input Mark (adjusted) and the first', () => {
        app.onMark()
        app.onMark()
        expect(app.mark.length).toBe(2)
        app.mark[1].adjust = 7
        expect(app.position(app.mark[1])).toBe('00:00:07')
      })
    })
    describe('must apply the adjustment of the first to all marks,', () => {
      it('returning the first mark position offset by its adjustment', () => {
        app.onMark()
        expect(app.mark.length).toBe(1)
        app.mark[0].adjust = 420
        expect(app.position(app.mark[0])).toBe('00:07:00')
      })
      it('returning the input position offset by the adjustment of the first mark', () => {
        app.onMark()
        app.onMark()
        expect(app.mark.length).toBe(2)
        app.mark[0].adjust = 420
        expect(app.position(app.mark[1])).toBe('00:07:00')
      })
      it('returning the input position (adjusted) offset by the first mark adjustment', () => {
        app.onMark()
        app.onMark()
        expect(app.mark.length).toBe(2)
        app.mark[0].adjust = 420
        app.mark[1].adjust = 17
        expect(app.position(app.mark[1])).toBe('00:07:17')
      })
      it('returning the input position (adjusted) offset by the first mark adjustment', () => {
        app.onMark()
        app.onMark()
        app.onMark()
        expect(app.mark.length).toBe(3)
        app.mark[0].adjust = 420
        app.mark[1].adjust = 17
        app.mark[2].adjust = 169
        expect(app.position(app.mark[1])).toBe('00:07:17')
        expect(app.position(app.mark[2])).toBe('00:09:49')
      })
    })
  })
  describe('asHourMinSec(Date)', () => {
    it('must return the `HH:MM:SS` portion of a Date string', () => {
      const t = ['07', '42', '13']
      const d = new Date
      d.setUTCHours(+t[0], +t[1], +t[2])
      expect(app.asHourMinSec(d)).toEqual(t.join(':'))
    })
  })
})
