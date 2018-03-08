// tslint:disable-next-line:eofline
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeAddProductComponent } from './home-add-product/home-add-product.component';
import { HomeEditProductComponent } from './home-edit-product/home-edit-product.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'product',
                component: ProductComponent,
                children: [
                    {
                        path: 'add-new',
                        component: HomeAddProductComponent
                    },
                    {
                        path: 'edit',
                        component: HomeEditProductComponent
                    }
                ]
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'category',
                component: CategoryComponent
            }
        ]
    }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
