import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export class Service {
  constructor(private context: WebPartContext) {

  }

  getUpComingBirthdays(listName: string, count: number=3) {
    let todayDate = (new Date()).getDate();
    let todayMonth = (new Date()).getMonth() + 1;
    let url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=*,Employee/Title,Employee/EMail&$filter=Month_x002d_Date ge '2000-${todayMonth}-${todayDate}T00:00:00Z'&$top=${count}&$expand=Employee&$orderby=Month_x002d_Date asc`;

    return this.context.spHttpClient.get(url,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      })
      .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
        return response.json();
      });
  }


}