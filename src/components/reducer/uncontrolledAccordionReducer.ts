type stateType = {
    collapsed: boolean
}

export const uncontrolledAccordionReducer = (state: stateType , action: uncontrolledAccordionAction) => {
    switch(action.type){
        case "UPDATE_COLLAPSE_VALUE":
            return {...state, collapsed: !state.collapsed}
    }
}


export type uncontrolledAccordionAction = ReturnType<typeof uncontrolledAccordionAC>;

 export const uncontrolledAccordionAC = () => {
    return {
        type: 'UPDATE_COLLAPSE_VALUE'
    } as const
}