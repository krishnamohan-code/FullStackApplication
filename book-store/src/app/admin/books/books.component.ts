import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   books:Array<Book>;
  action: string;
  selectedBook: Book;
  constructor(private httpClientService:HttpClientService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() 
  {
    this.refreshData()
  }
    refreshData(){
    this.httpClientService.getBooks().subscribe(
      Response => this.handleSuccessfulResponse(Response)
      );
      this.activatedRoute.queryParams.subscribe(
        (params)=>{ this.action=params['action'];
      }
      )
  }
  handleSuccessfulResponse(response)
  {
    this.books=response;
  }
  addBook()
  {
    this.selectedBook=new Book();
    this.router.navigate(['admin','books'],{queryParams:{action:'add'}})
  }
}
