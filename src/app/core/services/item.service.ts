import { Injectable } from '@angular/core';
import { Item } from '../models/st/item';
import { ApiObjectData } from '../models/apiObjectData';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  controller = 'Item';
  constructor(private base: BaseService) { }

  get(id: number): Observable<ApiObjectData> {
    return this.base.get(id, this.controller);
  }

  getsByCategoryId(id: number) {
    return this.base.gets(this.controller + '/GetByCategory/' + id);
  }

  gets(): Observable<ApiObjectData> {
    return this.base.gets(this.controller);
  }

  save(obj: Item) {
    return this.base.save(this.controller, obj);
  }

  stopUseItem(id:number){
    return this.base.gets(this.controller+'/StopUseItem/'+id);
  }

  unStopUseItem(id:number){
    return this.base.gets(this.controller+'/UnStopUseItem/'+id);
  }

  checkCode(code:string,id:number){
    return this.base.gets(this.controller+'/ChecKCode/'+code+'/'+id);
  }

  remove(id: number) {
    return this.base.remove(this.controller, id);
  }
  
  delete(id:any){
    return this.base.delete(this.controller,id);
  }
}
