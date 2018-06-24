import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeadService {

    private _titleSuffix = '';

    constructor(
        private titleService: Title
    ) {
    }

    public setTitle(title: string): void {
        this.titleService.setTitle(`${title}${this._titleSuffix}`);
    }

    public setFullTitle(newTitle: string): void {
        this.titleService.setTitle(newTitle);
    }

    public getTitle(): string {
        return this.titleService.getTitle();
    }
}
