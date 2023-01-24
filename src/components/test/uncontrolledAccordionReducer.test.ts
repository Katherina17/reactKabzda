import {uncontrolledAccordionAC, uncontrolledAccordionReducer} from "../reducer/uncontrolledAccordionReducer";

test('reducer should change value', () => {

    const state = {
        collapsed: false
    }

   const newState = uncontrolledAccordionReducer(state, uncontrolledAccordionAC());

    expect(newState.collapsed).toBe(true)
});

