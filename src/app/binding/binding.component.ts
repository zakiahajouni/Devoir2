import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
  titre:string="apprendre le DataBinding dans angular 10";
  status : boolean=true;
  nom : string="nadhem belhadj";
  constructor() { }

  ngOnInit(): void {
  }
  changertitre(){
    this.titre="mon nouveau titre";
}
} 