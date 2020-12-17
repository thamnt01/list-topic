import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TopicService } from '../topic.service';
import { Topic } from '../topic'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  topics: Topic[] = [];
  name: '';
  checked = true;
  constructor(public topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getAll().subscribe((data: Topic[]) => {
      this.topics = data;
    })
  }
  deleteTopic(id) {
    if (confirm("Are you sure to delete this account ")) {
      this.topicService.delete(id).subscribe(res => {
        this.topics = this.topics.filter(item => item.id !== id);
      })
    }
  }
  deleteAllTopic() {
    if (confirm("Are you sure to delete this account ")) {
      this.topicService.deleteAll().subscribe(res => {
        this.topics;
      })
    }
  }
  searchByName(): void {
    this.topicService.findByName(this.name).subscribe(data => {
      this.topics;
    })
  }
  isSelectedTopic() {
    return this.topics.filter(topic => {
    })
  }
}
