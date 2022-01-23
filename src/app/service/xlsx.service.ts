import { ElementRef, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class XlsxService {
  constructor() {}

  private deleteElements(element: Element, tagName: string) {
    const elements = element.getElementsByTagName(tagName);
    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  convertToJson$(file: File, sheetIndex: number) {
    return from(file.arrayBuffer()).pipe(
      map(buffer => {
        const workbook = XLSX.read(buffer, { type: 'buffer', bookVBA: true });
        const firstSheetName = workbook.SheetNames[sheetIndex];
        const worksheet = workbook.Sheets[firstSheetName];
        return XLSX.utils.sheet_to_json<any>(worksheet);
      }),
      tap(data => console.log(data))
    );
  }

  exportSheet(element: ElementRef, fileName: string) {
    this.deleteElements(element.nativeElement, 'app-contract-row');
    this.deleteElements(element.nativeElement, 'app-payment-row');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
    XLSX.writeFile(wb, fileName);
  }
}
