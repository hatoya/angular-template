import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { from } from 'rxjs';
import { EAnalyticsEvent } from '../enum/analytics-event.enum';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private angularFireAnalytics: AngularFireAnalytics) {}

  logEvent(eventName: EAnalyticsEvent, params: { [key: string]: any }) {
    return from(this.angularFireAnalytics.logEvent(eventName, params));
  }
}
