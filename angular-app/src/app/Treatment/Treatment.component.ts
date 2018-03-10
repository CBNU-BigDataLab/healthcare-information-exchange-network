import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TreatmentService } from './Treatment.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Treatment',
	templateUrl: './Treatment.component.html',
	styleUrls: ['./Treatment.component.css'],
  providers: [TreatmentService]
})
export class TreatmentComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          idx = new FormControl("", Validators.required);
        
  
      
          name = new FormControl("", Validators.required);
        
  
      
          createDate = new FormControl("", Validators.required);
        
  


  constructor(private serviceTreatment:TreatmentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          idx:this.idx,
        
    
        
          name:this.name,
        
    
        
          createDate:this.createDate
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTreatment.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.healthcare.information.exchange.network.Treatment",
      
        
          "idx":this.idx.value,
        
      
        
          "name":this.name.value,
        
      
        
          "createDate":this.createDate.value
        
      
    };

    this.myForm.setValue({
      
        
          "idx":null,
        
      
        
          "name":null,
        
      
        
          "createDate":null
        
      
    });

    return this.serviceTreatment.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "idx":null,
        
      
        
          "name":null,
        
      
        
          "createDate":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.healthcare.information.exchange.network.Treatment",
      
        
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "createDate":this.createDate.value
          
        
    
    };

    return this.serviceTreatment.updateAsset(form.get("idx").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceTreatment.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceTreatment.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "idx":null,
          
        
          
            "name":null,
          
        
          
            "createDate":null 
          
        
      };



      
        if(result.idx){
          
            formObject.idx = result.idx;
          
        }else{
          formObject.idx = null;
        }
      
        if(result.name){
          
            formObject.name = result.name;
          
        }else{
          formObject.name = null;
        }
      
        if(result.createDate){
          
            formObject.createDate = result.createDate;
          
        }else{
          formObject.createDate = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "idx":null,
        
      
        
          "name":null,
        
      
        
          "createDate":null 
        
      
      });
  }

}
