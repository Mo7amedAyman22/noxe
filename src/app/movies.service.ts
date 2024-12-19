import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {




  constructor(private _httpClient:HttpClient) { }


  getTrending(mediaType:string):Observable<any>
  {

    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=3d5a79eac7dbee85159cd3bbfa4b5033`)


  }
  getItemDeltails(mediaType:string , id:number){
    return this._httpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3d5a79eac7dbee85159cd3bbfa4b5033`)

  }

}
