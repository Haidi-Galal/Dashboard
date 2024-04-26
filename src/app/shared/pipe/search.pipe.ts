import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/users';

@Pipe({
  standalone:true,
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:User[],id:number): User[] {
    if(id==0||id==null){
      return users;
    }
    return users.filter((user)=>{
      return user.id==id;
    })
  }

}
