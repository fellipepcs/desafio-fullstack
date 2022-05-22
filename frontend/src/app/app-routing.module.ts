import { ProductListComponent } from './components/product/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MapaComponent } from './components/mapa/mapa.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "mapa",
  component: MapaComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path:"products/list",
  component: ProductListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
