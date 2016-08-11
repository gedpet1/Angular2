/*export class Cluster {    
    clusterId: number;
    name: string;
}*/

export class Host {    
    hostId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    Cluster: number;
}

export class VirtualMachine {    
    hostId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    Host: number;
}

export class ClusterViewModel{
    clusterId: number;
    name: string;
}

export class HostViewModel{
    hostId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    Cluster: number;
}