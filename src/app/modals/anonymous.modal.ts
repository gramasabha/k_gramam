import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    templateUrl: 'anonymous.modal.html',
    styles: [
        '.center-attr { font-size: 1rem; text-align: center;}'
    ]
})
export class AnonymousModal {

    @Input() title: string;
    @Input() desc: string;
    @Input() list: string[];

    constructor(public modalController: ModalController) { }

    dismissModal() { this.modalController.dismiss({ 'dismissed': true }); }
}