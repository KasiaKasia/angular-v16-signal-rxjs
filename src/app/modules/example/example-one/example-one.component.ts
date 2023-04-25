import { BehaviorSubject, combineLatest,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html'
})
export class ExampleOneComponent {  
    
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isEvent$: Observable<boolean> = this.counter$
    .asObservable()
    .pipe(map((counter: any) => counter % 2 === 0));
     
  // Signal
  counterSignal = signal(0);
  isEventSignal = computed(() =>  this.counterSignal() % 2 === 0 );

  constructor() {
     combineLatest([this.counter$, this.isEvent$]).subscribe(
      ([counter, isEvent]) => {
        console.log(`counter: ${counter}, isEvent: ${isEvent}, `);
      }
    );
    setTimeout(() => this.counter$.next(1), 1000);
    /*
    output:
      counter: 0, isEvent: true, 
      counter: 1, isEvent: true, 
      counter: 1, isEvent: false, 
    */

    // Signal
    effect(() => { 
      console.log('Signal ',  this.counterSignal(),  this.isEventSignal())
    }, { allowSignalWrites: true });
    setTimeout(() => this.counterSignal.set(1), 1000);
    /*
    output:
    signal  0 true
    signal  1 false
    */ 
  } 
}
