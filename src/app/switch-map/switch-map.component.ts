import { Component } from '@angular/core';
import { Observable, filter, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-switch-map',
  template: `
  <div>
    <ul>
      <li *ngFor="let value of arr | async">{{ value.email }}</li>
    </ul>
  </div>
`,
})
export default class SwitchMapComponent {
  currentPostId !: number;
  arr !: Observable<any>;

  constructor(private http : HttpClient){
    this.selectPost(2)

    let data = of(4,5,7,8,5,)
    data.
    pipe(
      switchMap(res => this.http.get(`https://jsonplaceholder.typicode.com/posts/${res}`))
    )
    .subscribe(res => {
      
        console.log(res);

    })

    // this.http.get(`https://jsonplaceholder.typicode.com/posts/`)
    // .pipe(
    //   tap(res => console.log(res, 'before tranforming')
    //   ),
    //   map((res:any) => {
    //     let obj = res.filter((E: any) => E.id < 5)
    //     return obj
    //   }),tap(res => console.log(res, 'after tranforming')
    //   ),
    // )
    // .subscribe(res => {
    //   console.log(res);
      
    // })
  }

  selectPost(id : number){
    this.currentPostId = id;
    this.arr = this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).pipe(
      switchMap((post : any) =>{
        return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${post[0].id}`);
      })
    );
    this.arr.subscribe((val) =>{
      console.log(val)
    })
  }
}
