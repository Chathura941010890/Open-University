import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, config, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; const apiUrl = 'http://dummy.restapiexample.com/api/v1';

@Injectable({ providedIn: 'root' })

export class EmpService {

	constructor(private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}
	getAllEmployees(): Observable<any> {
		const url = `${apiUrl}/employees`;
		return this.http.get(url, httpOptions).pipe(
			catchError(this.handleError),
			map(result => {
				if (result['data'] === 0) {
					console.log('Empty');
				}
				else {
					return result['data'];
				}
			}));
  }
  
  getOne(id: string): Observable<any> {
		const url = `${apiUrl}/employee/${id}`;
		return this.http.get(url, httpOptions).pipe(
			catchError(this.handleError),
			map(result => {
				if (result['data'] === 0) {
					console.log('Empty');
				}
				else {
					return result['data'];
				}
			}));
	}

	updateEmployee(id: string): Observable<any> {
		const url = `${apiUrl}/update${id}`;
		return this.http.put(url, httpOptions)
			.pipe(
				catchError(this.handleError),
				map(this.extractData));
	} 

	deleteEmployee(id: string): Observable<{}> {
		const url = `${apiUrl}/delete${id}`;
		return this.http.delete(url, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	addEmployee(data: NgForm): Observable<{}> {
		const url = `${apiUrl}/create`;
		return this.http.post<{}>(url, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
  }
}