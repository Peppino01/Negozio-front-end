import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // Metodo per estrarre la data nel formato (yyyy-mm-dd)
  extractDateFromDateStr(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = this.formatWithLeadingZero(date.getMonth() + 1);
    const day = this.formatWithLeadingZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  // Metodo per formattare il numero aggiungendo uno zero iniziale se necessario
  formatWithLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
