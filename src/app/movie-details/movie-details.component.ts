import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  imgPrfix:string = 'https://image.tmdb.org/t/p/w500';

  type:any;
  id:any;
  moviesDetails:any;


  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService)
{
  this.type = _ActivatedRoute.snapshot.paramMap.get('type');
  this.id = _ActivatedRoute.snapshot.paramMap.get('id');

  _MoviesService.getItemDeltails(this.type , this.id).subscribe((data)=>{

    this.moviesDetails = data;
  })
}

}
