import { Component, OnInit } from '@angular/core';

import { faEllipsis, faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { faComment, faPaperPlane, faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-coments-post',
  templateUrl: './coments-post.component.html',
  styleUrls: ['./coments-post.component.scss']
})
export class ComentsPostComponent implements OnInit {
  faComment = faComment
  faPaperPlane = faPaperPlane
  faBookmark = faBookmark
  faHeart = faHeart 
  faEllipsis = faEllipsis
  faCircleChevronRight = faCircleChevronRight
  faCircleChevronLeft = faCircleChevronLeft
  constructor() { }

  ngOnInit(): void {
  }

}
