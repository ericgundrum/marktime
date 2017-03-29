import { Mark } from './mark'

describe('Mark', () => {
  let mark: Mark

  beforeEach(() => {
    mark = new Mark
  })

  describe('constructor', () => {
    it('must record the current time', () => {
      const timeDialation = new Date().getTime() - mark.getTime()
      expect(timeDialation).toBeLessThan(10)
    })
    it('must set leave adjustment undefined', () => {
      expect(mark.adjust).toBeUndefined()
    })
    it('must set an empty label', () => {
      expect(mark.label).toBe('')
    })
  })
  describe('.adjustment', () => {
    it('must return 0 if `mark.adjust` is undefined', () => {
      expect(mark.adjust).toBeUndefined()
      expect(mark.adjustment()).toEqual(0)
    })
    it('must return 1000 times `mark.adjust`', () => {
      mark.adjust = 7
      expect(mark.adjustment()).toEqual((1000 * mark.adjust))
    })
  })
  describe('.position', function() {
    it('throw if the input is not a Mark', function() {
      // tslint:disable-next-line:prefer-const
      let m: Mark
      expect(m).toBeUndefined()
      expect(() => mark.position(m)).toThrowError(TypeError)
    })
    describe('when the input is itself, it must return', function() {
      it('0 when there is no adjustment', () => {
        expect(mark.adjust).toBeUndefined()
        expect(mark.position(mark)).toBe(0)
      })
      it('1000 * adjustment when it has adjustment', () => {
        mark.adjust = 17
        expect(mark.position(mark)).toBe(1000 * mark.adjust)
      })
    })
    describe('must return the time difference between', function() {
      beforeEach(function() {
        this.startTime = 1000 * 420
        this.anchor = new Mark
        this.anchor.time = new Date(mark.getTime() - this.startTime)
      })
      it('the input and this Mark (no adjustments)', function() {
        expect(mark.position(this.anchor)).toBe(this.startTime)
      })
      it('the input and this Mark adjusted', function() {
        mark.adjust = 42
        expect(mark.position(this.anchor)).toBe(this.startTime + mark.adjustment())
      })
      it('the input and this Mark (no adjustments) plus the input Mark adjustment', function() {
        this.anchor.adjust = 42
        expect(mark.position(this.anchor)).toBe(this.startTime + this.anchor.adjustment())
      })
      it('the input and this Mark (adjusted) plus the input Mark adjustment', function() {
        mark.adjust = 120
        this.anchor.adjust = 42
        expect(mark.position(this.anchor))
        .toBe(this.startTime + mark.adjustment() + this.anchor.adjustment())
      })
    })
  })
})
