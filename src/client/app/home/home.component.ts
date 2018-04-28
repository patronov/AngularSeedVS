import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { PredictiveModelService } from '../shared/services/predictive-model.service';
import { PredictiveModelDTO } from '../shared/services/dtos/predictive-model.dto';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    newName = '';
    errorMessage: string;
    names: any[] = [];
    models: PredictiveModelDTO[] = [];

    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(public nameListService: NameListService,
        public predictiveModelService: PredictiveModelService) { }

    /**
     * Get the names OnInit
     */
    ngOnInit() {
        this.getNames();
        this.getModels();
    }

    /**
     * Handle the nameListService observable
     */
    getNames() {
        this.nameListService.get()
            .subscribe(
            names => this.names = names,
            error => this.errorMessage = <any>error
            );
    }

    getModels() {
        this.predictiveModelService.getAllModels()
            .subscribe(
            models => this.models = models,
            error => this.errorMessage = <any>error
            );
    }

    /**
     * Pushes a new name onto the names array
     * @return {boolean} false to prevent default form submit behavior to refresh the page.
     */
    addName(): boolean {
        // TODO: implement nameListService.post
        this.names.push(this.newName);
        this.newName = '';
        return false;
    }

}
