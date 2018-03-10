import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { TreatmentComponent } from './Treatment.component';
import {TreatmentService} from './Treatment.service';
describe('TreatmentComponent', () => {
  let component: TreatmentComponent;
  let fixture: ComponentFixture<TreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [TreatmentService,DataService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
