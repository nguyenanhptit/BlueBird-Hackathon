import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAnswer, IQuestion} from '../model/question';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private  http: HttpClient) {
  }

  getListQuestion(): Promise<IQuestion> {
    return this.http.get<IQuestion>('http://localhost:8080/api/questions/').toPromise();
  }

  getAnswerBuyId(id: number): Observable<IAnswer> {
    return this.http.get<IAnswer>(`${this.API_URL}/answers/${id}`);
  }

  createQuestion(post: Partial<IQuestion>): Observable<IQuestion> {
    return this.http.post<IQuestion>(this.API_URL, post);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}/`);
  }

  updateQuestion(post: IQuestion): Observable<IQuestion> {
    return this.http.patch<IQuestion>(`${this.API_URL}/${post.id}`, post);
  }
}
