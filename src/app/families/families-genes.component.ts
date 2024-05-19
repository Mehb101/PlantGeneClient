import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FamilyGenes } from './family-genes';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-families-genes',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './families-genes.component.html',
  styleUrl: './families-genes.component.css'
})
export class familiesGenesComponent {

public FamiliesGenes: FamilyGenes[] = [];
public displayedColumns : string[]= ["geneId","size","charecteristic","cost", "name"];
  id: number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    this.id= -1;
  }
  ngOnInit(): void {
    this.getFamilyGenes();
  }

  getFamilyGenes() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter? + idparameter: -1;
    this.http.get<FamilyGenes[]>(`${environment.baseurl}api/Family/FamiliesGenes/${this.id}`).subscribe(
      {
        next: result=> this.FamiliesGenes = result,
        error: error => console.error(error)
      }
      
    );
}  
}