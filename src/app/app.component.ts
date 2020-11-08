import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  firstNameControl: FormControl;
  secondNameControl: FormControl;

  calculating = false;
  percentage: number;
  description: string;

  constructor( private apiService: ApiService) {}

  ngOnInit(): void {
    this.firstNameControl = new FormControl(null, [Validators.required]);
    this.secondNameControl = new FormControl(null, [Validators.required]);
  }

  onCalculate() {
    if (this.firstNameControl.valid && this.secondNameControl.valid) {

      this.apiService.getPercentage(
        this.firstNameControl.value, 
        this.secondNameControl.value).subscribe(
          data => {
            this.percentage = data.percentage;
            this.description = data.result;
          },
          error => {
            console.log('something went wrong...');
            console.log(error);
          });
    }
  }
}
