import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const findByTestAttr = (component: any, attr:string) => {
  const wrapper = component.find(`[data-test="${attr}"]`)
  return wrapper;
}

describe("App component render", () => {
  
  let container = shallow(<App />)

  it("should render a main element", () => {
    expect(findByTestAttr(container, "mainContainer").length).toEqual(1)
  })

  it("should render a section element", () => {
    expect(findByTestAttr(container, "timerContainer").length).toEqual(1)
  })

  it("should render three span element", () => {
    expect(findByTestAttr(container, "timer").length).toEqual(3)
  })

  it("should render a Control component", () => {
    expect(container.find("Controls").length).toBe(1)
  })

})