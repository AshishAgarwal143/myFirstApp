import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent,canActivate:[AuthGuard]
		// children: [
		// 	{ path: '', redirectTo: 'product', pathMatch: 'full' },
		// 	{ path: 'product', component: ProductComponent },
		// 	{ path: 'productdetail', component: ProductDetailComponent }
		// ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
