import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase imports
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BudgetComponent } from './budget/budget.component';
import { TransactionsComponent } from './transactions/transactions.component';

// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BudgetComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    DashboardModule
    // CanvasJSAngularChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
