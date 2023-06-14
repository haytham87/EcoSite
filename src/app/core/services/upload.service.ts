import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  controller = 'Upload';
  constructor(private base: BaseService) { }

    CategoryImage(file):Observable<any> {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.base.save(this.controller + '/CategoryImage', formData)
  }

    ItemImage(file):Observable<any> {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.base.save(this.controller + '/ItemImage', formData)
  }


  UserImage(file):Observable<any> {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.base.save(this.controller + '/UsersImage', formData)
  }

  PersonalImage(file):Observable<any> {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.base.save(this.controller + '/PersonImage', formData)
  }
}
