import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
apiServiceUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

public getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`)
}

public getEmployee(id: number):Observable<Employee>{
  return this.http.get<Employee>(`${this.apiServiceUrl}/employee/${id}`)
}

public addEmployee(employee: Employee):Observable<Employee>{
  return this.http.post<Employee>(`${this.apiServiceUrl}/employee/add`, employee)
}

public updateEmployee(employee: Employee):Observable<Employee>{
  return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`, employee)
}

public deleteEmployee(id: number):Observable<void>{
  return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete/${id}`)
}
}
