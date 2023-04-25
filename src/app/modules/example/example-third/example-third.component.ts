import { Component, computed, Signal, signal } from '@angular/core';
import { fromSignal, fromObservable } from '@angular/core/rxjs-interop';
import { Flights } from 'app/common/models/flight-interface';
import { DataJsonService } from 'app/shared/service/data-json.service';
import { combineLatest, empty, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-example-third',
  templateUrl: './example-third.component.html'
})
export class ExampleThirdComponent {
  getFlights$: Observable<Flights>;
  
  constructor(private flightService: DataJsonService) {
    this.getFlights$ = this.flightService.getFlights();
  }

  // Signals
  from = signal<string>('Madrid');
  to = signal<string>('Warsaw');

  flightRoute = computed(() => ' from ' + this.from() + ' to ' + this.to());
  loading = signal<Boolean>(false);

  // Signal converted to Observables
  from$ = fromSignal(this.from);
  to$ = fromSignal(this.to);

  flights$ = combineLatest([this.from$, this.to$]).pipe(
    tap(() => this.loading.set(true)),
    switchMap(val => (val ? this.getFlights$ : empty())),
    tap(() => this.loading.set(false))
  );
   // Observable converted to Signal
  flights: Signal<Flights> = fromObservable(this.flights$  );
}
