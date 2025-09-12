import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RegexTextsService {
  isEmail(text: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  }
}
