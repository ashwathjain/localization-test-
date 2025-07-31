// main.ts
import { panel } from './panel';

export { panel };

// Optional: Other extension lifecycle methods
export const methods = {
    showLog() {
        console.log('Hello World from main.ts');
    },
};

export function load() {
    console.log('Extension loaded');
}

export function unload() {
    console.log('Extension unloaded');
}
