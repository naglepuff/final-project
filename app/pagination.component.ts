import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'pagination',
  template: `
    <nav aria-label="Page navigation" *ngIf="shouldBeVisible">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  `
})
export class PaginationComponent{
  @Input() pageSize = 10;
  @Input() data: any[];
  displayedData = any[];
  @Input() shouldBeVisible = false;

  constructor(){
    numPages = data.length / pageSize;
    if(numPages > 1){
      this.shouldBeVisible = true;
      this.displayedData = getData(1);
    }
  }

  public getData(pageNum?){
    if(pageNum){
      return dataOnPage(pageNum);
    }else{
      return this.data;
    }
  }

  public dataOnPage(pageNum){
    this.displayedData = any[];
    for(int i = pageSize * pageNum; i < pageSize * (pageNum + 1) && i < data.length; i++){
      this.displayedData.push(this.data[i]);
    }
  }

}
