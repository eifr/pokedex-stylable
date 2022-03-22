import * as styleSheet from '../src/header.st.css';
import { StylableDOMUtil } from '@stylable/dom-test-kit';

const headerTestUtil = new StylableDOMUtil(styleSheet);

export const selector = {
    root: headerTestUtil.scopeSelector('.title')
}