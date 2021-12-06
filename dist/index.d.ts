import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { IWalletConnectProviderOptions } from '@walletconnect/types';
export interface WalletConnectConnectorArguments extends IWalletConnectProviderOptions {
    supportedChainIds?: number[];
}
interface WalletLinkConnectorArguments {
    url: string;
    appName: string;
    appLogoUrl?: string;
    darkMode?: boolean;
    supportedChainIds?: number[];
}
export declare class WalletLinkConnector extends AbstractConnector {
    private readonly url;
    private readonly appName;
    private readonly appLogoUrl?;
    private readonly darkMode;
    walletLink: any;
    private provider;
    constructor({ url, appName, appLogoUrl, darkMode, supportedChainIds }: WalletLinkConnectorArguments);
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
    private handleChainChanged;
    private handleAccountsChanged;
}
export declare class WalletConnectConnector extends AbstractConnector {
    private readonly config;
    walletConnectProvider?: any;
    constructor(config: WalletConnectConnectorArguments);
    private handleChainChanged;
    private handleAccountsChanged;
    private handleDisconnect;
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    deactivate(): void;
    close(): Promise<void>;
}
export {};
