import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { SupportMessage } from '../models/SupportMessage.models';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendSupportMessage(supportMessage: SupportMessage) {
    return this.http.post<SupportMessage>(
      `${this.apiUrl}support/send-message`,
      supportMessage
    );
  }
}
