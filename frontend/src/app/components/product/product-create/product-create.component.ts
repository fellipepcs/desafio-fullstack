import { Localidade } from '../localizacao.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formCadastro: FormGroup;

  localidade: Localidade = {
    nome: '',
    longitude: 0,
    latitude: 0
  }

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório' }],
    longitude: [
      { tipo: 'required', mensagem: 'O campo longitude é obrigatório' },
      { tipo: 'minlength', mensagem: 'Digite um valor maior que -180'},
      { tipo: 'maxlength', mensagem: 'Digite um valor menor que 180'}
    ],
    latitude: [
      { tipo: 'required', mensagem: 'O campo latitude é obrigatório' },
      { tipo: 'minlength', mensagem: 'Digite um valor maior que -90'},
      { tipo: 'maxlength', mensagem: 'Digite um valor menor que 90'}
      
    ]
  }

  constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      logintude: ['', Validators.compose([Validators.required, Validators.minLength(-180), Validators.maxLength(180)])],
      latitude: ['', Validators.compose([Validators.required, Validators.minLength(-90), Validators.maxLength(90)])]
    })

  }
  ngOnInit(): void {
  }

  salvarCadastro() {
    console.log('Formulario', this.formCadastro.valid);
  }

  createProduct(): void {
    this.productService.create(this.localidade).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }
}
