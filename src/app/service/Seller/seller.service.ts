import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { SignUp } from 'src/app/data-type';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject();

  constructor(private http:HttpClient) { }

  sellerSignUp(data:SignUp){
    return this.http.post('http://localhost:8080/seller',
    data,
    {observe:'response'}).subscribe((result)=>
    {
      console.warn('result',result);
    });
  }
}
