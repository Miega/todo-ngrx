import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    // Set browser storage to keep todo items even after browser refresh or tab close
    setItem(key: string, value: any) {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }

    getItem(key: string) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }

    clear() {
        localStorage.clear();
    }
}
