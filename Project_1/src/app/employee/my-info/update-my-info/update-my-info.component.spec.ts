import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';


import { UpdateMyInfoComponent } from './update-my-info.component';

describe('UpdateMyInfoComponent', () => {
  let component: UpdateMyInfoComponent;
  let fixture: ComponentFixture<UpdateMyInfoComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
        Router],
        providers:[UpdateMyInfoComponent, Router],
      declarations: [UpdateMyInfoComponent]
    })

      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
