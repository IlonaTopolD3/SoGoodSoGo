import { Component, OnInit } from '@angular/core';
import { FaqList } from 'src/app/interface/faqListInterface';
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  faqList : FaqList[] = [];
  show: number = -1;
  dlugosc: number = 0;
  faqElement: FaqList = { id:0,question:'',answer:'' };
  

  constructor(private faqS: FaqServiceService) { }

  ngOnInit(): void {
    this.getList();  
  }

  getList(){
    this.faqS.getFaq().subscribe(items => {
      this.faqList = items;
      this.dlugosc = this.faqList.length;
    });
  }

  addQuestion(){
    this.faqElement.id = this.dlugosc+1;
    this.faqS.addFaq(this.faqElement);
  } 

  collapse(i: number){

    if(this.show === i){
       this.show = -1;
    } else {
      this.show = i;
    }
  }

}
