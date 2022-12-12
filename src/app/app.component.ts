import { Component } from '@angular/core';
import { Post } from 'src/models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts:Post[] = [
    {
      title: 'My First Post',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      createdAt: 'Dec 12 01:37',
      author: 'John Doe'
    },
    {
      title: 'My Second Post',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      createdAt: 'Dec 12 05:20',
      author: 'James'
    },
    {
      title: 'My Third Post',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      createdAt: 'Dec 12 10:20',
      author: 'John Doe'
    }
  ];
  title = 'bootstrap-template';
}
