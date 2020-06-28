import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { EmpService} from './emp.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    DetailsComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
