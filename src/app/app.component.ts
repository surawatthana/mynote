import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MegaMenuItem, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'my-note-app';

  panleMenuHeightMargin = 80;

  editor!: Editor;
  html!: '';
  orientation = 'vertical';
  items!: MenuItem[];
  panelMenuItems!: MenuItem[];

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  innerWidth: any;
  innerHeight: any;
  panleMenuHeight: string = 700 + 'px';


  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.panleMenuHeight = (this.innerHeight - this.panleMenuHeightMargin) +  'px';
    this.editor = new Editor();
    this.html = '';
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];

    this.panelMenuItems = [
      {
      label: 'File',
      icon:'pi pi-fw pi-file',
      items: [
          {
              label: 'New',
              icon:'pi pi-fw pi-plus',
              items: [
                  {
                  label: 'Bookmark',
                  icon:'pi pi-fw pi-bookmark'
                  },
                  {
                  label: 'Video',
                  icon:'pi pi-fw pi-video'
                  }
              ]
          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-trash'
          },
          {
              label: 'Export',
              icon:'pi pi-fw pi-external-link'
          }
      ]
      },
      {
      label: 'Edit',
      icon:'pi pi-fw pi-pencil',
      items: [
          {
              label: 'Left',
              icon:'pi pi-fw pi-align-left'
          },
          {
              label: 'Right',
              icon:'pi pi-fw pi-align-right'
          },
          {
              label: 'Center',
              icon:'pi pi-fw pi-align-center'
          },
          {
              label: 'Justify',
              icon:'pi pi-fw pi-align-justify'
          }
      ]
      },
      {
      label: 'Users',
      icon:'pi pi-fw pi-user',
      items: [
          {
              label: 'New',
              icon:'pi pi-fw pi-user-plus',

          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-user-minus',
          },
          {
              label: 'Search',
              icon:'pi pi-fw pi-users',
              items: [
                  {
                  label: 'Filter',
                  icon:'pi pi-fw pi-filter',
                  items: [
                      {
                          label: 'Print',
                          icon:'pi pi-fw pi-print'
                      }
                  ]
                  },
                  {
                  icon:'pi pi-fw pi-bars',
                  label: 'List'
                  }
              ]
          }
      ]
      },
      {
      label: 'Events',
      icon:'pi pi-fw pi-calendar',
      items: [
          {
              label: 'Edit',
              icon:'pi pi-fw pi-pencil',
              items: [
                  {
                  label: 'Save',
                  icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                  label: 'Delete',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          },
          {
              label: 'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items: [
                  {
                  label: 'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          }
      ]
      }
  ]

  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.panleMenuHeight = (this.innerHeight - this.panleMenuHeightMargin) +  'px';
  }
}
