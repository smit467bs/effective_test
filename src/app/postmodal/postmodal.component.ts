import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPost } from '../types';

@Component({
  selector: 'app-postmodal',
  templateUrl: './postmodal.component.html',
  styleUrls: ['./postmodal.component.scss']
})
export class PostmodalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public post: IPost) {
  }

}
