import { SWITCH_TO_WIDE_SCREEN_MODE, SWITCH_TO_NARROW_SCREEN_MODE, TOGGLE_NAVIGATION } from "./action_types";

export function switchToWideScreenModeAction(payload){
    return({type: SWITCH_TO_WIDE_SCREEN_MODE, payload});
}

export function switchToNarrowScreenModeAction(payload){
    return({type: SWITCH_TO_NARROW_SCREEN_MODE, payload});
}

export function toggleNavigationAction(payload){
    return({type: TOGGLE_NAVIGATION, payload});
}