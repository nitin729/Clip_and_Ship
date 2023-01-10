import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalId = ''
constructor(public modal:ModalService){
 
}
  public closeModal(){
    this.modal.toggleModal(this.modalId)
  }
}
