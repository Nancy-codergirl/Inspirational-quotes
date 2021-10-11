import { Component, OnInit } from '@angular/core';
import {Quote} from 'src/app/interfaces/quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[]
  quote: Quote={upvote:0,downvote:0}
  quote2: Quote={upvote:0,downvote:0}
  Title!:string
  Author!:string
  quotetext!:string

  constructor() { this.quote={Title:"Hard-work",Author:"Socrates",quote:"Hardwork pays",upvote:0,downvote:0}
  this.quote2={Title:"Hard-work",Author:"Socrates",quote:"Hardwork pays",upvote:0,downvote:0,}
  this.quotes.push(this.quote)
  this.quotes.push(this.quote2)
}
Onsubmit(){
  this.quote={Title:this.Title,Author:this.Author,quote:this.quotetext,upvote:0,downvote:0}
  this.quotes.push(this.quote)
} 
upvote(index:number){
this.quotes[index].upvote++
}

downvote(index:number){
this.quotes[index].downvote++
}
  ngOnInit(): void {

  }

}
