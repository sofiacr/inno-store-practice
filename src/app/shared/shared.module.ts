import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LabelPipe } from './label/label.pipe';

@NgModule({
    declarations: [ HeaderComponent, ListComponent, LabelPipe ],
    imports: [ CommonModule, FormsModule ],
    exports: [ HeaderComponent, ListComponent, CommonModule, FormsModule ],
    providers: [ DataService ]
})
export class SharedModule {}
