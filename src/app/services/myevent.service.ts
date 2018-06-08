import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MyeventService {

  eve = new EventEmitter<number>()
  constructor() { }

  getEvent() {
    return this.eve;
  }

  emitEvent(n: number) {
    this.eve.emit(n);
  }


}
