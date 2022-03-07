import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-services',
  templateUrl: './modal-services.component.html',
  styleUrls: ['./modal-services.component.css']
})
export class ModalServicesComponent implements OnInit {
  @Input() localMessage: string = '';
  @Input() localTitle: string = '';
  @Input() showDisplayModal: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param open need to send name 'block'
   * precisa ser criando locamente estes 2 metodos para abrir e fechar o serviço de modal
   */

  openModal(){   
    this.showDisplayModal = 'block';    
  }
  /**
   * 
   * @param close need to send name 'none'
   */
  closeModal(){    
    this.showDisplayModal = 'none';   
  }

}
