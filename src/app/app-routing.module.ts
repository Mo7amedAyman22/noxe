import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"movies" , component:MoviesComponent},
  {path:"people" , component:PeopleComponent},
  {path:"network" , component:NetworkComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"movieDetails/:type/:id" , component:MovieDetailsComponent},

  {path:"**" , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
