import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SachinComponent } from './sachin/sachin.component';
import { TriangleComponent } from './triangle/triangle.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalculatorService } from './services/calculator.service';
import { TriangleService } from './services/triangle.service';
import { PerimeterService } from './services/perimeter.service';
import { SalaryService } from './services/Salary/salary.service';
import { TaService } from './services/Salary/ta.service';
import { DaService } from './services/Salary/da.service';
import { HraService } from './services/Salary/hra.service';
import { LtaService } from './services/Salary/lta.service';
import { EmployeeWithServiceComponent } from './employee-with-service/employee-with-service.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CompaniesComponent } from './companies/companies.component';
import { EmployeeService } from './services/employee.service';
import { OrganisationsComponent } from './organisations/organisations.component';
import { SearchbarComponent } from './organisations/searchbar/searchbar.component';
import { PromisetestComponent } from './promisetest/promisetest.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { DoublePipe } from './double.pipe';
import { PipetestComponent } from './pipetest/pipetest.component';
import { PowerPipe } from './power.pipe';
import { LimitPipe } from './limit.pipe';
import { AscendingPipe } from './ascending.pipe';
import { TablefilterComponent } from './tablefilter/tablefilter.component';
import { SearchPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { Page1ComponentComponent } from './page1-component/page1-component.component';
import { Page2ComponentComponent } from './page2-component/page2-component.component';
import { UserviewComponent } from './userview/userview.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlayersComponent } from './players/players.component';
import { User1Component } from './user1/user1.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';
import { MyhideDirective } from './myhide.directive';
import { MyredDirective } from './myred.directive';
import { MyifDirective } from './myif.directive';
import { MyforDirective } from './myfor.directive';
import { TemplateValidationWorkComponent } from './template-validation-work/template-validation-work.component';
import { ReactiveBasedFormComponent } from './reactive-based-form/reactive-based-form.component';
import { FormBuilderbasedComponent } from './form-builderbased/form-builderbased.component';
import { FormArrayTestComponent } from './form-array-test/form-array-test.component';
import { EmpSearchPipe } from './emp-search.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp2/comp3/comp3.component';
import { MyeventService } from './services/myevent.service';

var myRoutes: Routes = [
    // { path: '', component: HomeComponent },
    // // { path: 'about', component: AboutComponent },
    // // { path: 'contact', component: ContactComponent },
    // { path: 'player/:id', component: PlayersComponent },
    // {
    //     path: 'home', component: User1Component,
    //     children: [
    //         { path: '', component: ViewComponent },
    //         { path: 'edit/:id', component: EditComponent }
    //     ]
    // },
    
    {path:'',component:AboutComponent,canActivate:[AuthGuard]},
    {path:'detail',component:DetailComponent}

    // { path: 'page1', component: Page1ComponentComponent },
    // { path: 'page2', component: Page2ComponentComponent,
    //     children: [
    //         { path: 'view/:id', component: UserviewComponent }
    //     ]
    // }

];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        RegisterComponent,
        LoginComponent,
        CalculatorComponent,
        SachinComponent,
        TriangleComponent,
        DoctorComponent,
        UsersComponent,
        EmployeeComponent,
        EmployeeWithServiceComponent,
        ParentComponent,
        ChildComponent,
        CompaniesComponent,
        OrganisationsComponent,
        SearchbarComponent,
        PromisetestComponent,
        ObservableTestComponent,
        DoublePipe,
        PipetestComponent,
        PowerPipe,
        LimitPipe,
        AscendingPipe,
        TablefilterComponent,
        SearchPipe,
        HomeComponent,
        ProductDetailComponent,
        ProductComponent,
        Page1ComponentComponent,
        Page2ComponentComponent,
        UserviewComponent,
        AboutComponent,
        ContactComponent,
        PlayersComponent,
        User1Component,
        DetailComponent,
        MyhideDirective,
        MyredDirective,
        MyifDirective,
        MyforDirective,
        TemplateValidationWorkComponent,
        ReactiveBasedFormComponent,
        FormBuilderbasedComponent,
        FormArrayTestComponent,
        EmpSearchPipe,
        EditComponent,
        Comp1Component,
        Comp2Component,
        Comp3Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        //RouterModule.forRoot(myRoutes)
    ],
    providers: [
        EmployeeService,
        CalculatorService,
        TriangleService,
        PerimeterService,
        SalaryService, TaService, DaService, HraService, LtaService,AuthGuard,MyeventService],
    bootstrap: [AppComponent]
})
export class AppModule { }
