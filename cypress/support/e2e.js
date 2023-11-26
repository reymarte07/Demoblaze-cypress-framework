import '@shelex/cypress-allure-plugin';
import './commands'
import { CommonPageMethods } from '../e2e/pages/common-page/common-page.methods';

beforeEach(()=>{
    CommonPageMethods.navigateToDemoBlaze();
  })