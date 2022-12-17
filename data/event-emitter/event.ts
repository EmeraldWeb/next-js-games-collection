import { v4 as uuidv4 } from 'uuid';

export const eventThemeSwitch = `eventThemeSwitch-${uuidv4()}`;
export type ParamsThemeSwitch = {
    theme: string,
}
