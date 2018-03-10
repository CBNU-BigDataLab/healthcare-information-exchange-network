import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Treatment } from '../org.healthcare.information.exchange.network';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TreatmentService {

	
		private NAMESPACE: string = 'Treatment';
	



    constructor(private dataService: DataService<Treatment>) {
    };

    public getAll(): Observable<Treatment[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Treatment> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Treatment> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Treatment> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Treatment> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
