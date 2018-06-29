import { EcnriptionHandler } from './encription-handler';
export declare class IPFSservice {
    node: any;
    encrServece: EcnriptionHandler;
    private constructor();
    static init(): Promise<IPFSservice>;
    ipfsInsert(data: any, key?: string): Promise<{} | undefined>;
    readFile(file_Url: any): Promise<{} | undefined>;
    retriveIpfs(dataOpject: any): Promise<{}>;
    private addToIpfs;
}
