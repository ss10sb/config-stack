import * as cdk from '@aws-cdk/core';
import {Config} from '@smorken/config-loader';

export class ConfigStack<T extends Config> extends cdk.Stack {

    public readonly config: T;

    constructor(app: cdk.App, id: string, stackProps: cdk.StackProps, config: T) {
        super(app, id, stackProps);

        this.config = config;
    }

    get isProd(): boolean {
        return this.config.Environment === 'prod';
    }

    mixNameWithId(name: string): string {
        return `${this.node.id}-${name}`;
    }
}
