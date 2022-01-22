import { Injectable } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { EAnalyticsEvent } from '../enum/analytics-event.enum';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private analytics: Analytics) {}

  logEvent(eventName: EAnalyticsEvent, params: { [key: string]: any }) {
    logEvent(this.analytics, eventName, params);
  }
}
