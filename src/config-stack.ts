import * as cdk from '@aws-cdk/core';
import {Config} from '@smorken/config-loader';

export class ConfigStack extends cdk.Stack {

    public readonly config: Config;

    constructor(app: cdk.App, id: string, stackProps: cdk.StackProps, config: Config) {
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
