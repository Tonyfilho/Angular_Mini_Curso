import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appModal]',
  //   template: `
  //   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  // <div class="modal-dialog">
  // <div class="modal-content">
  //   <div class="modal-header">
  //     <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>

  //   </div>
  //   <div class="modal-body">
  //     ...
  //   </div>
  //   <div class="modal-footer">
  //     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

  //   </div>
  // </div>
  // </div>
  // </div>
  //   `
})
export class ModalDirective implements AfterViewInit {
  @Input() localMessage: string = '';
  @Input() localTitle: string = '';
  @Input() showDisplayModal: string = '';
 

  constructor(private elementRef: ElementRef) {
  console.log(this.localMessage, this.localTitle, this.showDisplayModal);
  const modal2 = this.elementRef.nativeElement;
  console.log('MOdal2',modal2)
  
  }
  ngAfterViewInit(): void {
    
    const modal = this.elementRef.nativeElement;
    modal.div = `
    <div
    class="modal"
    tabindex="-1"
    role="dialog"
    [ngStyle]="{ display: ${this.showDisplayModal} }"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${this.localTitle}</h4>
        </div>
        <div class="modal-body">
          <p>${this.localMessage}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
      `;
  }
}
