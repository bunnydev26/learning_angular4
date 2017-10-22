import { Component } from '@angular/core';
import { FavoriteChangedArgs } from './favorite/favorite.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
  	title: 'Title',
  	isFavorite: true
  };

  onFavoriteChanged(isFavorite: FavoriteChangedArgs) {
  	console.log("Fav changed ", isFavorite);
  }
}