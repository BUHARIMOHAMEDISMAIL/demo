import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {

  errorMessage: string;
  dummyData = {
    assetName: "Test1",
    assetCategory: 'Laptop',
    dateOfPurchase: '26-3-1992',
    assetCost: 350000,
    assetDescription: "DUmmy test",
    assetId: 'ABCD123'
  }
  assetDetails: any = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getAsset(asset) {
    console.log(asset);
    this.assetDetails = this.dummyData;
  }

  updateAsset(assetId) {
    console.log(assetId);
    // this.router.navigate(['/updateAsset'], { queryParams: { assetId: assetId } });
    this.router.navigate(['/updateAsset', assetId]);
  }
}
