import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../../models/project';
import { ProjectsService } from '../../../services/projects.service';
import { CheckBoxPrinterComponent } from '../check-box-printer/check-box-printer.component';

@Component({
  selector: 'admin-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input("currentProject") project: Project = new Project();
  @Input("recordIndex") currentIndexProject: number | any = null;

  @Output() editClick = new EventEmitter();  // Custom Event
  @Output() deleteClick = new EventEmitter(); // Custom Event
  @Output() showClick = new EventEmitter(); // Custom Event 

  hideDetails: boolean = false;

  subscription!: Subscription;
  subscriptionForCheckBox!: Subscription;

  // @ContentChild("checkBoxPrinterGrandChild") checkBoxPrinter!: CheckBoxPrinterComponent   // Represents one objet of checkBoxPrinter component (Grand child)
  @ContentChildren("checkBoxPrinterGrandChild") checkBoxPrinters!: QueryList<CheckBoxPrinterComponent>  // Represents all objets of checkBoxPrinter component (Grand children)

  @ViewChild("dataTable") table! :ElementRef;

  constructor(public projectsService: ProjectsService) { }

  ngOnChanges(simplechanges: SimpleChanges): void {
    // simplechanges : Represents all inputs properties
    console.log("------------------ ngOnChanges called ------------------");

    for (let propertyName in simplechanges) {
      let inputProperty = simplechanges[propertyName];
      let currentValue = JSON.stringify(inputProperty.currentValue);
      let previousValue = JSON.stringify(inputProperty.previousValue);
      console.log(`${propertyName}: currentValue = ${currentValue}, previousValue = ${previousValue}`);
    }
    if (simplechanges["project"]) {
      // this.project.teamSize += 5;
    }
  }

  ngOnInit(): void {   // Executes automatically after loading the values into data bound properties of the component

    console.log("------------------ ngOnInit called ------------------");
    this.subscription = this.projectsService.myBehaviorSubject.subscribe((hideData) => {
      this.hideDetails = hideData;
    });
  }

  ngDoCheck(): void {
    
    console.log("------------------ ngDoCheck called ------------------");
  }

  ngAfterContentInit(): void {

    console.log("------------------ ngAfterContentInit called ------------------");
    console.log(this.checkBoxPrinters.toArray());
  }

  ngAfterContentChecked(): void {
    
    console.log("------------------ ngAfterContentChecked called ------------------");
  }

  ngAfterViewInit(): void {
    
    console.log("------------------ ngAfterViewInit called ------------------");
    console.log(this.table);
  }

  ngAfterViewChecked(): void {
    
    console.log("------------------ ngAfterViewChecked called ------------------");
  }

  onEditClick() {
    // Emit the editClick Event when the button is clicked
    this.editClick.emit();
  }

  onDeleteClick() {
    // Emit the deleteClick Event when the button is clicked
    this.deleteClick.emit();
  }

  isAllCheckedChangeChild(isAllChecked: boolean) {

   // ContentChild
    //(isCheckedValue) ? this.checkBoxPrinter.check() : this.checkBoxPrinter.unChecked();

    //ContentChildren
    let checkBoxPrintersArray : CheckBoxPrinterComponent[] = this.checkBoxPrinters.toArray();
    checkBoxPrintersArray.forEach(element => {
      (isAllChecked) ? element.check() : element.unChecked();
    });
  }

  ngOnDestroy() {  // Execute when the component object is removed from the memory (When you navigate to an other route)
    
    console.log("------------------ ngOnDestroy called ------------------");
    this.subscription.unsubscribe();  // Cancel the subscription
  }





}
