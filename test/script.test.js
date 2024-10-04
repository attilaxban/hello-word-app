import {expect} from 'chai'
import { JSDOM } from 'jsdom';

describe('1. Test content of the element', function() {
  let dom, document;

  before(function() {
    dom = new JSDOM('<!DOCTYPE html><div id="root"><h1>Hello World!Test</h1></div>');
    document = dom.window.document;
  });

  it('should have correct innerHTML in #root', function() {
    const rootElement = document.getElementById('root');
    expect(rootElement.innerHTML).to.equal('<h1>Hello World!Test</h1>');
  });
});