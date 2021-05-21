import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

const routes: Routes = [
  {
    path:'addAsset',
    component: AddAssetComponent
  },
  {
    path:'viewAsset',
    component: ViewAssetComponent
  },
  {
    path:'updateAsset/:assetId',
    component: UpdateAssetComponent
  },
  {
    path: '**',
    redirectTo: 'addAsset',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
