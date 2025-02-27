import { Component } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingMovies:any[]=[];
  trendingTv:any[]=[];


  imgPrfix:string = 'https://image.tmdb.org/t/p/w500';


  constructor(private _MoviesService:MoviesService){

    this. _MoviesService.getTrending('movie').subscribe((data:any)=>{

      this.trendingMovies = data.results.slice(0 , 10);
    })

    this. _MoviesService.getTrending('tv').subscribe((data:any)=>{

      this.trendingTv = data.results.slice(0 , 16);

  })
  }
}
