import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneHorizontalRule,
  PropertyPaneSlider,
  PropertyPaneTextField,
  PropertyPaneToggle,
  
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
  fullName: string;  
  myToggle: boolean;
  myCheckBox: boolean;
  myChoice: string;
  myslider: number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.helloWorld} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      <div class="${styles.welcome}">
        <img alt="" src="${this._isDarkTheme ? require('./assets/welcome-dark.png') : require('./assets/welcome-light.png')}" class="${styles.welcomeImage}" />
        <h2>Well done, ${escape(this.context.pageContext.user.displayName)}!</h2>
        <div>${this._environmentMessage}</div>
        <div>Webpart Title: <strong>${this.properties.description}</strong></div>
        <div>Full Name: <strong>${this.properties.fullName}</strong></div>
        <div>My Toggle: <strong>${this.properties.myToggle}</strong></div>
        <div>Checkbox: <strong>${this.properties.myCheckBox}</strong></div>
        <div>Gender: <strong>${this.properties.myChoice}</strong></div>
        <div>Age: <strong>${this.properties.myslider}</strong></div>
      </div>
     
    </section>`;
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "General Settings"
          },
          groups: [
            {
              groupName: "Basic Settings",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Webpart Title",
                  placeholder: "Title of the webpart"
                }),
                PropertyPaneTextField('fullName', {
                  label: "Full Name",
                  placeholder: "Jon Do"
                }),
                PropertyPaneToggle('myToggle',{
                  label: "My Toggle",
                  onText: "You turned it on",
                  offText: "You turned it off",
                }),
                PropertyPaneCheckbox('myCheckBox', {
                  text: "My Checkbox"
                }),
                PropertyPaneDropdown('myChoice', {
                  label: "Gender",
                  options: [
                    {key: "Male", text: "Male"},
                    {key: "Female", text: "Female"},
                    {key: "LGBT", text: "LGBT"},
                    {key: "Other", text: "Other"},
                  ]
                }), 
                PropertyPaneSlider('myslider', {
                  label: "Select Age",
                  min: 10,
                  max: 100, 
                  value: 20
                })
              ]
            }
          ]
        },
        {
          header: {
            description: "General Settings"
          },
          groups: [
            {
              groupName: "Basic Settings",
              groupFields: [
                PropertyPaneTextField('description1', {
                  label: "Webpart Title 1",
                  placeholder: "Title of the webpart"
                }),
                PropertyPaneTextField('fullName1', {
                  label: "Full Name 1",
                  placeholder: "Jon Do"
                }),
                PropertyPaneToggle('myToggle1',{
                  label: "My Toggle",
                  onText: "You turned it on",
                  offText: "You turned it off",
                }),
                PropertyPaneCheckbox('myCheckBox1', {
                  text: "My Checkbox"
                }),
                PropertyPaneDropdown('myChoice1', {
                  label: "Gender",
                  options: [
                    {key: "Male", text: "Male"},
                    {key: "Female", text: "Female"},
                    {key: "LGBT", text: "LGBT"},
                    {key: "Other", text: "Other"},
                  ]
                }), 
                PropertyPaneSlider('myslider1', {
                  label: "Select Age",
                  min: 10,
                  max: 100, 
                  value: 20
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
