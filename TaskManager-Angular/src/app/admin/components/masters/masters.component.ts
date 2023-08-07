import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, QueryList, Type, ViewChildren, ViewContainerRef } from '@angular/core';
import { ComponentLoaderDirective } from 'src/app/shared/directives/component-loader.directive';
import { CountriesComponent } from '../countries/countries.component';
import { ClientLocationsComponent } from '../client-locations/client-locations.component';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { TaskPrioritiesComponent } from '../task-priorities/task-priorities.component';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
    selector: 'app-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

    // Properties
    masterMenuItems: any[] = [
        { itemName: "Countries", displayName: "Countries", component: CountriesComponent },
        { itemName: "ClientLocations", displayName: "Client Locations", component: ClientLocationsComponent },
        { itemName: "TaskStatus", displayName: "Task Status", component: TaskStatusComponent },
        { itemName: "TaskPriorities", displayName: "Task Priorities", component: TaskPrioritiesComponent }
    ];
    activeItem!: string;
    tabs: any[] = [];
    @ViewChildren(ComponentLoaderDirective) componentLoaders!: QueryList<ComponentLoaderDirective>;

    // Constructor
    constructor(private elementRef: ElementRef) { }

    // Methods
    ngOnInit(): void { }

    menuItemClick(clickedMasterMenuItem: any) {
        this.activeItem = clickedMasterMenuItem.itemName;
        let matchingTabs = this.tabs.filter((item) => item.itemName == clickedMasterMenuItem.itemName);
        if (matchingTabs.length == 0) {
            this.tabs.push({
                tabIndex: this.tabs.length,
                itemName: clickedMasterMenuItem.itemName,
                displayName: clickedMasterMenuItem.displayName,
                component: clickedMasterMenuItem.component,
                viewContainerRef: null
            });

            setTimeout(() => {
                let componentLoadersArray = this.componentLoaders.toArray();
                let viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
                let componentRef = viewContainterRef.createComponent(clickedMasterMenuItem.component);

                this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;

                /*
                if (componentRef.instance instanceof CountriesComponent) {
                    let componentInstance = componentRef.instance as CountriesComponent;
                    componentInstance.message = "Welcome to countries";
                }
                */

            }, 100);
        }
    }

    onCloseClick(clickedTab: any) {
        clickedTab.viewContainerRef.remove();
        this.tabs = this.tabs.filter((item) => item.tabIndex !== clickedTab.tabIndex);

        if (this.tabs.length > 0) {
            // Remove 'active' class from all tab panes
            let tabPanes = this.elementRef.nativeElement.querySelectorAll('.tab-pane');
            tabPanes.forEach((tabPane: HTMLElement) => {
                tabPane.classList.remove('active', 'show');
            });
            let triggers = this.elementRef.nativeElement.querySelectorAll('.nav-link');
            tabPanes.forEach((tabPane: HTMLElement) => {
                tabPane.classList.remove('active');
            });
            
            // Manually add 'active' and 'show' class to the clicked tab pane
            let tabElement = document.querySelector(`#${this.tabs[0].itemName}`);
            let triggerElement = document.querySelector(`#${this.tabs[0].itemName}-tab`);
            if (tabElement && triggerElement) {
                tabElement.classList.add('active', 'show', 'opacity-100');
                triggerElement.classList.add('active');
                this.activeItem = this.tabs[0].itemName;
            }
        }else{
            this.activeItem = '';
        }
    }
}
