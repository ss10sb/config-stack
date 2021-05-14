import * as cdk from '@aws-cdk/core';
import { Config } from '@smorken/config-loader';
export declare class ConfigStack extends cdk.Stack {
    readonly config: Config;
    constructor(app: cdk.App, id: string, stackProps: cdk.StackProps, config: Config);
    get isProd(): boolean;
    mixNameWithId(name: string): string;
}
