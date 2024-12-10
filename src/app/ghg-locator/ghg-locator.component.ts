import { Component } from '@angular/core';
import { GhgServiceService } from '../Services/ghg-service.service';
import { FormBuilder } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ghg-locator',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './ghg-locator.component.html',
  styleUrl: './ghg-locator.component.css',
  providers: [GhgServiceService]
})
export class GhgLocatorComponent {
  objClsPartyList: any;
  constructor(private service: GhgServiceService, private SchemeArrayDetails: FormBuilder) { }
  
  ngOnInit(){
    this.BindParty();
  }

  BindParty(){
    this.service.postRequest(null).subscribe(
      (response) => {      
        if (response!=null) {
          console.log('Responce', response);
          this.objClsPartyList = response;
        }        
      }
    );
  }
}

