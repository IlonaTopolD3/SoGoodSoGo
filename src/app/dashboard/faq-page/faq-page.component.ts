import { Component, OnInit } from '@angular/core';
import { faqList } from 'src/app/interface/faqListInterface';
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  faqList : faqList[] = [];
  show: number = -1;

  

  constructor(private faqS: FaqServiceService) { }

  ngOnInit(): void {

    this.faqS.getFaq().subscribe(items => {
      this.faqList = items;
    })
        
  }

  collapse(i: number){

    if(this.show === i){
       this.show = -1;
    } else {
      this.show = i;
    }
   
    //console.log("- Show: "+ this.show + " - i: " + i);
  }

}
