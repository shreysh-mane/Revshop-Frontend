import { Component } from '@angular/core';
import { SellerService } from '../../../service/Seller/seller.service';

import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {


  constructor(private seller:SellerService, private router:Router){}
  
  signUp(data:User):void{
    this.seller.sellerSignUp(data).subscribe((result)=>
    {
      console.warn('result',result);
    },
    error=>{
      console.warn('Error',error);
    });
    //console.log(data);
  }

}
