import cdk = require('@aws-cdk/core');
import {Config, ConfigParameters} from "@smorken/config-loader";
import {ConfigStack} from "../src";

export interface OtherConfig extends Config {
    readonly Parameters: OtherParameters;
}

export interface OtherParameters extends ConfigParameters {
    readonly otherProp: string;
}

describe('config stack', () => {
    it('should not be prod when env is not set', () => {
        const app = new cdk.App();
        const buildConfig = <Config>{
            Name: 'test'
        }
        const stack = new ConfigStack(app, 'test', {}, buildConfig);
        expect(stack.isProd).toBe(false);
    });
    it('should be prod when env is prod', () => {
        const app = new cdk.App();
        const buildConfig = <Config>{
            Name: 'test',
            Environment: 'prod'
        }
        const stack = new ConfigStack(app, 'test', {}, buildConfig);
        expect(stack.isProd).toBe(true);
    });
    it('should mix id with the name', () => {
        const app = new cdk.App();
        const buildConfig = <Config>{
            Name: 'test'
        }
        const stack = new ConfigStack(app, 'test', {}, buildConfig);
        expect(stack.mixNameWithId('foo')).toBe('test-foo');
    });
    it('should use typed config', () => {
        const app = new cdk.App();
        const buildConfig = <OtherConfig>{
            Name: 'test',
            Parameters: {
                otherProp: 'foo'
            }
        }
        const stack = new ConfigStack<OtherConfig>(app, 'test', {}, buildConfig);
        expect(stack.config.Parameters.otherProp).toBe('foo');
    });
});
