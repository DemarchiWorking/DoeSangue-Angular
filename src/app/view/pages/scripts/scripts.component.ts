import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})

export class ScriptsComponent implements OnInit {
  form: FormGroup;
  nome = new FormControl('');
  senha = new FormControl('');
  descricao = new FormControl('');

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nome: this.nome,
      senha: this.senha,
      descricao: this.descricao
    });
}

  ngOnInit(): void {
    this.form = new FormGroup({
     nome: new FormControl('', [Validators.required]),
     senha: new FormControl('', [Validators.required, Validators.email]),
     descricao: new FormControl('', [Validators.required])
   })
  }

  public onSubmit(){
    alert("ok")
  }

  public validation(): void {
   this.form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.email]),
    descricao: new FormControl('', [Validators.required])
    })
  }
}

// ngOnInitt() {
//this.form = this.fb.group({
// nome: '',
//  password: ''
// });
//}
