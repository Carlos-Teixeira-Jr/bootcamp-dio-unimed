import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/84090ef6-9ab7-4d38-ab90-fa48787810c4';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de usuários READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  //Salva usuário no banco de dados CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }

  // Exclui usuário do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`)
  }

  // Edita usuário UPDATE
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuário único
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
}
