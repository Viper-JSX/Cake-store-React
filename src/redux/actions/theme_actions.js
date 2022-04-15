import { SWITCH_THE_THEME } from "./action_types";

export function switchThemeAction(payload){
    return({ type: SWITCH_THE_THEME, payload });
}