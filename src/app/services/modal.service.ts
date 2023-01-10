import { Injectable } from '@angular/core';

interface IModal{
  id:string,
  isVisible:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() { }
  
  register(id:string){
    this.modals.push({
      id,
      isVisible:false
    }) 
  }

  isModalVisible(id: string): boolean {
    return Boolean(this.modals.find(modal => modal.id === id)?.isVisible);
  }
  toggleModal(id: string): void {
    const modal = this.modals.find(modal => modal.id === id);
    if(modal){
      modal.isVisible =!modal.isVisible;
    }
 //   this.isVisible =!this.isVisible;
  }

}
