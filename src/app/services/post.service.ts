import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postList = [
    { contenu: 'détails premier post' },
    { contenu: 'détails deuxième post' }
  ];

  constructor() {}

  getPosts() {
    return this.postList;
  }
}

