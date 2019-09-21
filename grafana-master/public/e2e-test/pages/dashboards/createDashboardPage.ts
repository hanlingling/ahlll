import { TestPage, ClickablePageObjectType, ClickablePageObject, Selector } from '@grafana/toolkit';

export interface CreateDashboardPage {
  addQuery: ClickablePageObjectType;
}

export const createDashboardPage = new TestPage<CreateDashboardPage>({
  url: '/dashboard/new',
  pageObjects: {
    addQuery: new ClickablePageObject(Selector.fromAriaLabel('Add Query CTA button')),
  },
});
