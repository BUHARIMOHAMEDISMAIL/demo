import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  submitted: boolean = false; // for validation
  addAssetForm: FormGroup;
  successMessage: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addAssetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetCategory: ['', Validators.required],
      assetDescription: ['', Validators.required],
      dateOfPurchase: ['', Validators.required],
      assetCost: ['', [Validators.required, Validators.maxLength(2)]]
    })
  }
  get formControls() { return this.addAssetForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('onsubmit');
    this.successMessage = 'Asset added with Asset Id 1011';

    // this.buffetService.bookBuffet(this.buffetBookingForm.value).subscribe(
    //   (response: any) => {
    //       // if (response && response !== '') {
    //       //     if (response.statuscode === 200) {
    //       //         const status = response.data;
    //       //     } else {
    //       //         console.log('Error in logging messages: ', response.Message === '' ? 'Message node is empty' : response.Message);
    //       //     }
    //       // }
    //       console.log(response);
    //       this.successMessage = response.id;
    //   }
    // );
  }
}
