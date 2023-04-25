import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleComponent } from './example/example.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleRoutingModule } from './example-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleSecondComponent } from './example-second/example-second.component';
import { ExampleThirdComponent } from './example-third/example-third.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataJsonService } from 'app/shared/service/data-json.service';

@NgModule({
  declarations: [
    ExampleComponent,
    ExampleOneComponent,  
    ExampleSecondComponent, 
    ExampleThirdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ExampleRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    ExampleComponent,
    ExampleOneComponent,  
    ExampleSecondComponent,
    ExampleThirdComponent
  ],
  providers: [DataJsonService]
})
export class ExampleModule {}
