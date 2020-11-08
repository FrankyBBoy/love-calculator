import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = 'https://love-calculator.p.rapidapi.com/getPercentage';
  private readonly host = 'love-calculator.p.rapidapi.com';
  private readonly apiKey = 'a0c145d012mshde8b9fc3eadaa81p1b3a51jsn095b6e8f3fe2';

  constructor(private httpClient: HttpClient) { }

  getPercentage(firstName: string, secondName: string): Observable<Result> {
    return this.httpClient.get<Result>(this.url, {
      headers: { "x-rapidapi-key": this.apiKey,
                 "x-rapidapi-host": this.host,
                 "useQueryString": 'true' },
      params: { "fname": firstName,
                "sname": secondName}
    });
  }
}
