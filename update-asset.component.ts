import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  submitted: boolean = false; // for validation
  updateAssetForm: FormGroup;
  successMessage: string;

  constructor(private fb: FormBuilder, public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateAssetForm = this.fb.group({
      field: ['', Validators.required],
      value: ['', Validators.required],
    })

    let assetId = this.router.snapshot.params['assetId'];
    console.log(assetId);
  }

  get formControls() { return this.updateAssetForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('onsubmit');
    this.successMessage = 'Asset updated successfully';
  }

}
