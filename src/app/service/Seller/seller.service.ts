import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from 'src/app/model/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // isSellerLoggedIn=new BehaviorSubject();

  baseURL='http://localhost:9000/revshop/api/'
  constructor(private http:HttpClient) { }

  sellerSignUp(data:User):Observable<any>
  {
    return this.http.post(this.baseURL+'user/',
    data,{responseType:'text'});
  }
}
