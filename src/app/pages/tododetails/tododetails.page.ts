import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.page.html',
  styleUrls: ['./tododetails.page.scss'],
})
export class TododetailsPage implements OnInit {

  todo: Todo = {
    task: 'Test 123',
    createdAt: new Date().getTime(),
    priority: 2
  }

  todoId = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.todoId = this.route.params['id'];
    if (this.todoId) {
      this.loadTodo;
    }
  }

  async loadTodo () {
    const loading = await this.loadingController.create({
      // content: 'Loading Todo...'
    });
    await loading.present(); 

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async  saveTodo() {
    const loading = await this.loadingController.create({
      // content: 'Loading Todo...'
    });
    await loading.present(); 

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }

}
