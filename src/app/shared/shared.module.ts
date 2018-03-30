import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LabelPipe } from './label/label.pipe';

@NgModule({
    declarations: [ HeaderComponent, LabelPipe ],
    imports: [ CommonModule, FormsModule ],
    exports: [ HeaderComponent, CommonModule, FormsModule ],
    providers: [ DataService ]
})
export class SharedModule {}
