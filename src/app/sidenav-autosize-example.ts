import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * @title Autosize sidenav
 */
@Component({
  selector: "sidenav-autosize-example",
  templateUrl: "sidenav-autosize-example.html",
  styleUrls: ["sidenav-autosize-example.scss"]
})
export class SidenavAutosizeExample implements OnInit {
  loginForm: FormGroup;
  showFiller = false;
  iconsUrl = "/assets/images/countries";
   countries = [
    {
      id: 'BO',
      value: 'Bolivia',
      image: `${this.iconsUrl}/BO.png`,
    },
    {
      id: 'CL',
      value: 'Chile',
      image: `${this.iconsUrl}/CL.png`,
    },
    {
      id: 'CO',
      value: 'Colombia',
      image: `${this.iconsUrl}/CO.png`,
    },
    {
      id: 'CR',
      value: 'Costa Rica',
      image: `${this.iconsUrl}/CR.png`,
    },
    {
      id: 'EC',
      value: 'Ecuador',
      image: `${this.iconsUrl}/EC.png`,
    },
    {
      id: 'SV',
      value: 'El Salvador',
      image: `${this.iconsUrl}/SV.png`,
    },
    {
      id: 'GT',
      value: 'Guatemala',
      image: `${this.iconsUrl}/GT.png`,
    },
    {
      id: 'MX',
      value: 'Mexico',
      image: `${this.iconsUrl}/MX.png`,
    },
    {
      id: 'PA',
      value: "Panama",
      image: `${this.iconsUrl}/PA.png`,
    },
    {
      id: 'PE',
      value: 'Peru',
      image: `${this.iconsUrl}/PE.png`,
    },
    {
      id: 'Puerto Rico',
      value: 'Ventura Corporation Limited',
      image: `${this.iconsUrl}/PR.png`,
    },
    {
      id: 'Republica Dominicana',
      value: 'Transbel S.R.L.',
      image: `${this.iconsUrl}/DO.png`,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      country: [null, [Validators.required]]
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
