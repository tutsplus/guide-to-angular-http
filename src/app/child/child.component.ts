import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <div>
      <h3>Child Page</h3>
    </div>
  `,
})
export class ChildComponent implements OnInit {
    operation: string | undefined;
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
      this.route.params.subscribe((params) => this.operation = params['operation']);
      if(this.operation)
        alert(this.operation)
    }
  }