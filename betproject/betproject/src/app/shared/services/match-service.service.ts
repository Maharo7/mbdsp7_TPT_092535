import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchRegles } from '../models/matchregles.model';
import { Match } from '../models/match.model';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Equipe } from '../models/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  uri = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  
  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.uri+"/getAllMatches");
  }
  getMatchById(id): Observable<Match> {
    return this.http.get<Match>(this.uri+"/match/"+id);
  }

  getMatchByEquipe(id):Observable<Match[]>{
    return this.http.get<Match[]>(this.uri+"/match/equipe/"+id);
  }

  getMatchByDate(id):Observable<Match[]>{
    return this.http.get<Match[]>(this.uri+"/match/equipe/"+id);
  }
  getMatchRegles(id):Observable<MatchRegles>{
    return this.http.get<MatchRegles>(this.uri+"/matchregles/"+id);
  }
}
