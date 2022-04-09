import { Component, OnInit } from '@angular/core';
import { faqList } from 'src/app/interface/faqListInterface';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  faqList : faqList[] = [];
  show: number = -1;
  constructor() { }

  ngOnInit(): void {

    this.faqList = [
      {id: 1,question: 'Ile to kosztuje?', answer: 'Prowadzenie konta jest całkowicie za darmo.'},
      {id: 2,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
    ];
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
