import { HttpClient } from '@angular/common/http';
import { afterRenderEffect, Component, computed, Inject, signal, viewChild, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api-service';
import { OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-main-component',
  styleUrl: './main-component.css',
  templateUrl: './main-component.html',
})


export class MainComponent {

  @Input() marka: any;
  @Input() urtea: any;
  @Input() showSegurtasun: boolean = false;
  @Input() modeloa: any;

  data = signal<any>([]);
  recall = signal<any>(null);

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
  }

  lortuKotxeak(mark: any, year: any) {
    this.apiService.getVehicle(mark, year).subscribe({
      next: (res) => {
        this.data.set(res)
        console.log(this.data())
      }, error (err){
        console.log("Errorea", err)
      }
    })
  } 

  lortuCall(mark: any, model: any, year: any) {
    this.showSegurtasun = true;
    this.apiService.getRecalls(mark, model, year).subscribe({
      next: (res) => {
        this.recall.set(res);
        console.log(this.recall());
      }, error (err) {
        console.log("Errorea", err)
      }
    })
  }

  bilatu() {
    this.lortuKotxeak(this.marka, this.urtea)
  }

  resetInputs() {
    this.marka.set(null);
    this.urtea.set(null);
  }


}
