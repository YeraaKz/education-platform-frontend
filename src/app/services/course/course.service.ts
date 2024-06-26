import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDTO } from './courseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/v1/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(`${this.baseUrl}/all`);
  }

  getMyCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(`${this.baseUrl}/myCourses`);
  }

  getCourseById(id: number): Observable<CourseDTO> {
    return this.http.get<CourseDTO>(`${this.baseUrl}/${id}`);
  }

  enrollUserInCourse(id: number): Observable<string> {
    return this.http.post(`${this.baseUrl}/${id}/enroll`, {}, { responseType: 'text' });
  }

  saveCourse(course: CourseDTO): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/save`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateCourse(id: number, course: CourseDTO): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, course);
  }

  searchCourses(name: string): Observable<any> {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get(`${this.baseUrl}/search`, { params });
  }
}
