import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  productForm: FormGroup;
  
  description: string;
  price: number;
  idType: number;

  constructor(private fb: FormBuilder) {
    console.log('Creating this');
//    this.buildForm();
  }

  ngOnInit() {
  }
  
  buildForm() {
    this.productForm = this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      idType: ['', Validators.required]
    });
    
    this.productForm.get('id').valueChanges.subscribe((data) => console.log(data));
  }

}
