import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { DetailsService } from 'src/app/shared/services/details.service';
import { User } from 'src/app/shared/interfaces/users';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
id:any;
user!:User;
constructor(private route:ActivatedRoute,private details:DetailsService,private router:Router){}
  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next:(params)=>{
       this.id= params.get('id')
       
      }
    });
    this.getData();
  }
  getData(){
    this.details.getUserDetails(this.id).subscribe(
      {
        next:(response)=>{
          this.user=response.data;
          console.log(this.user);
        }
      }
    )
  }
  goHome(){
    this.router.navigate(['/home']);
  }

}
