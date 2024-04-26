import { DashboardService } from './../../shared/services/dashboard.service';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/shared/interfaces/users';
import { RouterLink, RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/shared/pipe/search.pipe';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounce, slideInLeft } from 'ngx-animate';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule,
        RouterLink,
        RouterModule,
        NgxPaginationModule,
        SearchPipe,
        FormsModule],
        animations: [
          trigger('bounce', [transition('* => *', useAnimation(bounce))])
        ],
})
export class DashboardComponent implements OnInit {
bounce: any;
userId!:number; 
user1!:User[];
p: number=1;
pageNumber=1;
user2!: User[];
  constructor(private _dashService: DashboardService ){}
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._dashService.getUsersData(this.pageNumber).subscribe({
      next:(data)=>{
        if(this.pageNumber==1){
          this.user1=data.data;
        }else{
          this.user2=data.data;
          this.user1=this.user1.concat(this.user2);
          console.log(this.user1);
        }
      
      }
    })
  }
  pageChanged(event:any) {
   if(event==2){
    this.p=event;
    this.pageNumber=2;
    this.getData();


   }

      this.p=event;
     console.log(event);
   
   }
}
