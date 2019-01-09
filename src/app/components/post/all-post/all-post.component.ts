import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToPostEditPage(){
this.router.navigate(['post/all-post/edit-post'])
  }
}
