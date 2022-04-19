import { Component, OnInit } from '@angular/core';


import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { faComment, faPaperPlane, faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  faComment = faComment
  faPaperPlane = faPaperPlane
  faBookmark = faBookmark
  faHeart = faHeart 
  faEllipsis = faEllipsis
  constructor() { }

  ngOnInit(): void {
  }

}
