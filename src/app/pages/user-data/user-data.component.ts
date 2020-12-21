import { HttpClient } from '@angular/common/http';
import { IUsers } from 'src/app/shared/interface/userdatas';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  constructor(public d: DataService, private http:HttpClient) { }

  ngOnInit(): void {
  }
  postData(addForm){
    this.d.postData(addForm).subscribe(
      () => {
         this.d.dat.push(JSON.stringify(addForm.name));
         console.log(JSON.stringify(addForm));
      }
    );
  }
}
