import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleSecondComponent } from './example-second/example-second.component';
import { ExampleThirdComponent } from './example-third/example-third.component';
import { ExampleComponent } from './example/example.component';


const routes: Routes = [{
    path: 'example',
    component: ExampleComponent,
    children: [
        {
            path: 'one',
            component: ExampleOneComponent
        },
        {
            path: 'second',
            component: ExampleSecondComponent
        },
        {
            path: 'third',
            component: ExampleThirdComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule {}
