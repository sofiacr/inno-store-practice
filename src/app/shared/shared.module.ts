import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LabelPipe } from './label/label.pipe';
import { NotFoundComponent } from './not-found/not.found.component';

@NgModule({
    declarations: [ HeaderComponent, LabelPipe, NotFoundComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ HeaderComponent, CommonModule, FormsModule, NotFoundComponent ],
    providers: [ DataService ]
})
export class SharedModule {}
