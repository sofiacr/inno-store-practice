import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LabelPipe } from './label/label.pipe';
import { NotFoundComponent } from './not-found/not.found.component';
import { NavsComponent } from './navs/navs.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ HeaderComponent, LabelPipe, NotFoundComponent, NavsComponent ],
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ HeaderComponent, CommonModule, FormsModule, NotFoundComponent, NavsComponent ],
    providers: [ DataService ]
})
export class SharedModule {}
