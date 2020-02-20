import { NgModule } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        MessageComponent,
        ErrorComponent
    ],
    exports: [
        MessageComponent,
        ErrorComponent
    ]
})
export class SharedModule { }