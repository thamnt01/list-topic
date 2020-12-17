import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    public topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        gender: new FormControl(''),
        address: new FormControl('', [Validators.required])
      }
    )
  }
  get f() {
    return this.form.controls
  }
  submit() {
    console.log(this.form.value);
    this.topicService.create(this.form.value).subscribe(res => {
      alert('create succesfully');
      console.log(res)
    })
  }



}
