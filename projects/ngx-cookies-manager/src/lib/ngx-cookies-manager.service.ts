import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxCookiesManagerService {
  constructor() {}

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=').map((c) => c.trim());
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  setCookie(name: string, value: string, expires?: number): void {
    let cookieString = `${name}=${encodeURIComponent(value)}`;
    if (expires) {
      const expirationDate = new Date();
      expirationDate.setTime(
        expirationDate.getTime() + expires * 24 * 60 * 60 * 1000
      );
      cookieString += `;expires=${expirationDate.toUTCString()}`;
    }
    document.cookie = cookieString;
  }

  deleteCookie(name: string): void {
    this.setCookie(name, '', -1);
  }

  cookieExists(name: string): boolean {
    return this.getCookie(name) !== null;
  }

  getAllCookies(): { [name: string]: string } {
    const cookies: { [name: string]: string } = {};
    document.cookie.split(';').forEach((cookie) => {
      const [cookieName, cookieValue] = cookie.split('=').map((c) => c.trim());
      cookies[cookieName] = decodeURIComponent(cookieValue);
    });
    return cookies;
  }

  deleteAllCookies(): void {
    const allCookies = this.getAllCookies();
    for (const cookieName in allCookies) {
      if (allCookies.hasOwnProperty(cookieName)) {
        this.deleteCookie(cookieName);
      }
    }
  }

  getCookieCount(): number {
    return Object.keys(this.getAllCookies()).length;
  }

  getCookieNames(): string[] {
    return Object.keys(this.getAllCookies());
  }
}
