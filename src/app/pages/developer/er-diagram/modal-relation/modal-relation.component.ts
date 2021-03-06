// core
// tslint:disable:variable-name
import {Component} from '@angular/core';

// ngx-bootstrap
import {BsModalRef} from 'ngx-bootstrap';

// service
import {DataService} from '../service/data.service';

// class
import {Model} from '../class/model';
import {Schema} from '../class/schema';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal-relation.component.html'
})

export class ModalRelationComponent {

  public source_model: Model;
  public target_model: Model;

  public relation_type: string;

  constructor(private bsModalRef: BsModalRef, private dataService: DataService) {
    console.log('ModalRelationComponent.constructor() is called!');
    this.relation_type = 'one-to-many';
  }

  private create() {
    console.log('ModalRelationComponent.create() is called!');
    // tslint:disable-next-line:triple-equals
    if (this.relation_type == 'one-to-many') {
      this.dataService.addOneToManyRelation(this.source_model, this.target_model);
      // tslint:disable-next-line:triple-equals
    } else if (this.relation_type == 'many-to-many') {
      this.dataService.addManyToManyRelation(this.source_model, this.target_model);
    }
    this.bsModalRef.hide();
  }
}
