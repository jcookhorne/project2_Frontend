import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { FilesService } from '../files.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-request-reimbursement',
  templateUrl: './request-reimbursement.component.html',
  styleUrls: ['./request-reimbursement.component.css']
})
export class RequestReimbursementComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private http:HttpClient, private uploadService: FilesService ){ }

  retrieveEmployeeId(): any {
    let id = localStorage.getItem("id");
    return id;
  }
  reim: Reimbursement = {
    reimbursementId: 0,
    employeeId: this.retrieveEmployeeId(),
    reimbursementAmount: 0,
    reimbursementReason: "",
    reimbursementDate: "",
    state:"",
    status: ""
  }

    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
    fileInfos?: Observable<any>;

    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
    upload(): void {
      this.progress = 0;
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
        if (file) {
          this.currentFile = file;
          this.uploadService.upload(this.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadService.getFiles();
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            });
        }
        this.selectedFiles = undefined;
      }
    }
  
    ngOnInit(): void {}
  reimbursement() {
    this.employeeService.requestReimbursment(this.reim).subscribe((response: any) => {
      this.router.navigate(['home']);
    })
  }


}
