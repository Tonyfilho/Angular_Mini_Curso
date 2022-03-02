import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
     
      const modal = this.elementRef.nativeElement;
      modal.div = `
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
      `;
      
  }
}
