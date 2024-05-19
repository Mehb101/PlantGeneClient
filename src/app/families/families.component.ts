import { Component } from '@angular/core';
import { Families } from './families';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './families.component.html',
  styleUrl: './families.component.css'
})
export class FamiliesComponent {
  public Families: Families[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getfamilies();
  }
  getfamilies() {
    this.http.get<Families[]>(environment.baseurl+'api/Family').subscribe(
      {

        next: result => this.Families= result,
        error: error => console.error(error) 
      }
    );
  }

}
