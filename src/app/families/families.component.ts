import { Component } from '@angular/core';
import { Families } from './families';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [],
  templateUrl: './families.component.html',
  styleUrl: './families.component.css'
})
export class FamiliesComponent {
  public countries: Families[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getCountries();
  }
  getCountries() {
    this.http.get<Families[]>(environment.baseurl+'api/Families').subscribe(
      {

        next: result => this.countries= result,
        error: error => console.error(error) 
      }
    );
  }

}
