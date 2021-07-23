import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Crear variable tipo array
  lista: Array<any> = [
    {titulo: 'Ingeniería Ambiental'},
    {titulo: 'Ingeniería de Procesos'},
    {titulo: 'Ingeniería Biomédica'},
    {titulo: 'Ingeniería Biotecnología Acuática'},
    {titulo: 'Ingeniería en Geociencias'},
    {titulo: 'Ingeniería en Horticultura'},
    {titulo: 'Ingeniería Industrial en Manufactura'},
    {titulo: 'Ingeniería en Logística y Transporte'},
    {titulo: 'Ingeniería en Mecatrónica'},
    {titulo: 'Ingeniería en Software'},
    {titulo: 'Ingeniería en Tecnología de Alimentos'}
  ]

  constructor() {}

}
