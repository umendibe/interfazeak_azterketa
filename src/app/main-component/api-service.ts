import { Observable } from "rxjs";
import { inject, Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  getVehicle(mark: any, year: any): Observable<any[]> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${mark}/modelyear/${year}?format=json`;
    return this.http.get<[]>(url);
  }

  getRecalls(mark: any, model: any, year: any): Observable<any> {
    const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${mark}&model=${model}&modelYear=${year}`;
    return this.http.get(url);
  }
}