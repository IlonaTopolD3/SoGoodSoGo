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
      {id: 3,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 4,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 5,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 6,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 7,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 8,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 9,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 9,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'},
      {id: 9,question: 'Czy potrzebujemy specjalny sprzęt?', answer: 'Do obsługi wystarczy urządzenie z dostępem do internetu i przeglądarką internetową'}
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
