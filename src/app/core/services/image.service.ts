import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { IDoc } from '../interfaces/i-doc';
import { AuthenticationService } from './authentication.service';
import { IPagination } from '../interfaces/i-pagination';

@Injectable()
export class ImageService {
  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService,
    private authService: AuthenticationService
  ) {}

  get baseHttp() {
    return this.baseHttpService;
  }

  getDocs(page: number = 1): Observable<IPagination<IDoc>> {
    const headers = {
      Authorization: this.authService.token,
    };
    return this.http.get<IPagination<IDoc>>(`/api/pictures/?page=${page}`, {
      headers,
    });
  }

  getDoc(id: number): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.get<IDoc>(`/api/pictures/${id}/`, { headers });
  }

  updateDoc(id: number, src: any): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('src', src);
    return this.http.put<IDoc>(`/api/pictures/${id}/`, formData, {
      headers,
    });
  }

  removeDoc(id: number): Observable<null> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.delete<null>(`/api/pictures/${id}/`, {
      headers,
    });
  }

  upload(src: any): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('src', src);
    return this.http.post<IDoc>(`/api/pictures/`, formData, {
      headers,
    });
  }
}
