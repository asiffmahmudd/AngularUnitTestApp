import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {
  let component = new AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  let count = 1;
  afterEach(() => {
    console.log(count + " test done");
    count++;
  })

  beforeAll(() => {
    console.log("Before starting test")
  })

  afterAll(() => {
    console.log("all test done");
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularUnitTestApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularUnitTestApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularUnitTestApp app is running!');
  });

  it('My testcase', () => {
    expect(true).toBe(true);
  });

  it('Show Alert message', () => {
    expect(component.ShowMessage("Hello")).toBe("Hello");
  })

  it('Show the Addition result', () => {
    expect(Addition(10, 20)).toBe(30);
  })

  it('ToBe and ToEqual Test Case', () => {
    var a = 'Hello';
    var b = 'Hello';
    var c = [1];
    var d = [1];
    var e = true;
    var f = false;
    var obj = {
      foo: 'asd'
    }
    var myFunction = (function() {})();

    var undefinedStr;

    expect(a).toBe(b);
    expect(c).toEqual(d);
    expect(e).toBeTrue();
    expect(f).toBeFalse();
    expect(a).toBeTruthy();
    expect(f).toBeFalsy();
    expect(myFunction).toBeUndefined();
    expect(obj.foo).not.toBeUndefined();
    expect(undefinedStr).toBeUndefined();
    expect(null).toBeNull();
    expect([1,2,3]).toContain(2);

  })


});
