import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {HostService} from '../services/Clusters/HostService';

import {ClusterViewModel, HostViewModel} from '../viewModels/ClusterViewModel';

import {IHosts} from '../dtos/Hosts';

@Component({
  moduleId: module.id,
  selector: 'app-host-list',
  templateUrl: 'host-list.component.html',
  styleUrls: ['host-list.component.css']
})
export class HostListComponent implements OnInit {

  private _service: HostService;
  private _router: Router;

  clusterId: number;


  hosts$: Observable<IHosts[]>;

  constructor(service:HostService, router: Router) {
    this._service = service;
    this._router = router;
    this.hosts$ = service.getAllItems();
   }

  ngOnInit() {
    
  }

  onNavigate(host: HostViewModel, cluster: ClusterViewModel): void {
    //console.log(`Navigating to '${host.clusterId}'/hosts/'${host.name}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}/hosts/${host.hostId}`);
  }

}
