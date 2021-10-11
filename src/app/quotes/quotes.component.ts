import { Component, OnInit } from '@angular/core';
import {Quote} from 'src/app/interfaces/quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[]
  quote: Quote={}
  quote2: Quote={}

  constructor() { this.quote={Title:"Hard-work",Author:"Socrates",quote:"Hardwork pays",upvote:0,downvote:0}
  this.quote2={Title:"Hard-work",Author:"Socrates",quote:"Hardwork pays",upvote:0,downvote:0}
  this.quotes.push(this.quote)
  this.quotes.push(this.quote2)
}


  ngOnInit(): void {
  }

}
