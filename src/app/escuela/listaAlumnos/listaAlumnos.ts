import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface IAlumno {
  matricula: string;
  nombre: string;
  correo: string;
  materia: string;
}

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-listaAlumnos',
  styleUrl: './lista-alumnos.css',
  templateUrl: './listaAlumnos.html',
})
export class ListaAlumnos implements OnInit {
  
  formulario!: FormGroup;

  alumno: IAlumno = {
    matricula: ' ',
    nombre: ' ',
    correo: ' ',
    materia: ' '
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl(''),
    });
  }

  muestraAlumnos(): void {
    this.alumno.matricula = this.formulario.value.matricula;
    this.alumno.nombre = this.formulario.value.nombre;
    this.alumno.correo = this.formulario.value.correo;
    this.alumno.materia = this.formulario.value.materia;
  }
}