export class Mark {
  adjust: number
  label = ''
  private time: Date

  constructor() {
    this.time = new Date()
  }

  adjustment(): number { return this.adjust ? 1000 * this.adjust : 0 }
  getTime(): number { return this.time.getTime() }

  position(anchor: Mark): number {
    const offsetStart = anchor.adjustment()
    return anchor === this ? offsetStart :
      this.getTime() - anchor.getTime()
      + this.adjustment() + offsetStart
  }
}
