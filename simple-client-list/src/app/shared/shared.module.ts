import { NgModule } from '@angular/core';
import { MessageComponent } from '@shared/message/message.component';
import { ErrorComponent } from '@shared/error/error.component';

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