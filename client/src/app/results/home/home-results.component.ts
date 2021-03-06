import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

// Models
import { Classe } from '../../shared/models/classe.model';

// Services
import { ResultsService } from '../../shared/services/result.service';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
  styleUrls: ['./home-results.component.scss']
})
export class HomeResultsComponent implements OnInit {

  classes: Classe;
  resultForm: FormGroup;

  constructor(
    private resultsServices: ResultsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.resultForm = this.fb.group({
      roll_id: '',
      classe: ''
    });
  }

  /**
   *
   * Init
   *
   */
  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.classes = data.classe.classes;
      }
    );
  }

  findResult() {
    let data = this.resultForm.value;
    let roll_id = data.roll_id
    let classe = data.classe

    if (roll_id && classe) {
      let navigationExtras: NavigationExtras = {
        queryParams: { roll_id, classe }
      }

      setTimeout(() => this.router.navigate(['results'], navigationExtras) );

    }

  }

}
