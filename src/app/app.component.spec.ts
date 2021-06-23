import {
  ApolloTestingController,
  ApolloTestingModule,
  TestOperation
} from 'apollo-angular/testing';
import { AppComponent } from './app.component';
import { ExampleGql } from './graphql/generated/queries';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick
} from '@angular/core/testing';

describe('example', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let controller: ApolloTestingController;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [AppComponent],
      providers: [ExampleGql]
    });

    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;

    controller = TestBed.inject(ApolloTestingController);
  });

  it('should not fail on missing deps', () => {
    expect(true).toBeTruthy();
  })
});
