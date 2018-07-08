import { ProductType } from '../../model/product-type';
import { DataService } from '../../shared/data.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: [ './add-product.component.css' ]
})
export class AddProductComponent {


  // description = new FormControl();
  productForm: FormGroup;
  types: Array<ProductType>;
  
  constructor(
    private fb: FormBuilder, 
    private dataService: DataService<ProductType>,
    private productService: ProductService,
    private router: Router) {

    this.dataService.list('type').subscribe(data => this.types = data);
    this.createForm();
  }

  private createForm() {
    this.productForm = this.fb.group({
      description: ['', Validators.required ],
      price: ['', Validators.required ],
      idType: ['', Validators.required ]
    });
  }

  onSubmit() {
    const product = this.prepareProduct();
    this.productService.save(product).subscribe(data => {
      console.log('Nuevo: ' + data);
      this.router.navigate(['/products']);
    });
  }

  private prepareProduct(): Product {
    const model = this.productForm.value;
    const nproduct: Product = {
      description: model.description as string,
      price: model.price as number,
      idType: model.idType as number
    };
    return nproduct;
  }
}
