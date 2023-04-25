import { Component, computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-example-second',
  templateUrl: './example-second.component.html'
})
export class ExampleSecondComponent {

  firstName: WritableSignal<string> = signal<string>('');
  lastName: WritableSignal<string> = signal<string>('');
  password: WritableSignal<string> = signal<string>('');
  repeatPassword: WritableSignal<string> = signal<string>('');
  passwordMatch: Signal<boolean> = computed(() => this.password() === this.repeatPassword());

  setFirstName(event: Event) {
    this.firstName.set((event.target as HTMLInputElement).value)
  }
  setLastName(event: Event) {
    this.lastName.set((event.target as HTMLInputElement).value)
  }
  setRepeatPassword(event: Event) {
    this.repeatPassword.set((event.target as HTMLInputElement).value)
  }
  setPassword(event: Event) {
    this.password.set((event.target as HTMLInputElement).value)
  }
  constructor() {
    effect(() => {
      this.password();
      this.repeatPassword.set('')
    }, { allowSignalWrites: true }) 
  }
}
