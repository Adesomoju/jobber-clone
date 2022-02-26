import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  checked = false;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 350;
  min = 50;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 20;
  vertical = false;
  tickInterval = 10;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  constructor(
   public modalService : ModalService
  ) { }

  ngOnInit(): void {
    this.testAlertModal()
  }

  testAlertModal() {
    const data = {};
    this.modalService.ConfirmActionModal(data).subscribe(
      (res: any) => {
        if(res.data == 1){
          this.testModal()
        }
        console.log('result :',res);
      },
      err => {
        console.log(err);
      }
    )
  }

  testModal() {
    const data = {};
    this.modalService.OtherInfoModal(data).subscribe(
      (res: any) => {
        console.log('result :',res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
