import React from "react";
import { shallow } from "enzyme"
import Controls from "./Controls";

const setUp: any = (props: any) => {
    const component = shallow(<Controls {...props} />)
    return component
}

describe("Controls component render", () => {

    let component: any
    beforeEach(() => {
        component = setUp()
    })
    it("should render 3 buttons", () => {
        expect(component.find(`[data-test="btn"]`).length).toEqual(3)
    })
})