import { Component } from '@angular/core';
import { UploaderService } from '../shared/services/uploader.service';

@Component({
    selector: 'app-uploader',
    templateUrl: 'app/uploader/custom-uploader.component.html', //This is a bug!
})
export class UploaderComponent {
    message: string | any;

    constructor(private uploaderService: UploaderService) { }

    onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            this.uploaderService.upload(input.files).subscribe(
                msg => {
                    input.value = null;
                    this.message = msg;
                }
            );
        }
    }
}
