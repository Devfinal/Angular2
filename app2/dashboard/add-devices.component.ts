import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';
import { Router} from'@angular/router';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-add-devices',
	templateUrl:'add-devices.component.html',

})
export class AddDevicesComponent implements OnInit{
  private id=-1;
  private title="Add Devices";
  private rowsOnPage=5;
  public apiurl = "api/devices/";
  public devices={
    udid:'',
    imsi:'',
    imei:'',
    iccid:'',
    euiccid:'',
    lastactivity:'',
    ip:'',
    state:''
  };
  public connectionprofiles;

  public newconnection={
    profile_priority:2,
    customer_id:'',
    connection_type:'Rest-API',
    assigned_server:'',
    customer_backhaul_settings:
    [{
      loginid:'',
      password:'',
      remote_host:'',
      token_id:'',
      uplink_route:'',
      downlink_route:'',
      error_route:'',
      hello_route:'',
      amqp_pub_code:'',
      amqp_sub_code:'',
    }]
  };
	constructor(
    private router:Router,
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

)
        {
    /*
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.apiurl + params['id'])
            .map(res =>res.json())
            .subscribe(servicetemplate =>{
              this.servicetemplate = servicetemplate;this.id = params['id'];;this.btn_name="Save";

              this.getConnectionProfiles(this.servicetemplate.customer_id);
//              this.newconnection.customer_id =this.servicetemplate.customer_id;
//              this.servicetemplate.dedicated_connection_profile= (this.servicetemplate.dedicated_connection_profile === "true");
//              this.input_disabled = this.servicetemplate.dedicated_connection_profile;
            });
      });*/
  }
	ngOnInit(): void{
	}
	goBack():void{
		this.location.back();
	}

  getConnectionProfiles(customer_id){
    this.http.get('api/connectionprofiles/customer_id/' + customer_id)
      .map(res =>res.json())
      .subscribe(connectionprofiles =>{
        this.connectionprofiles = connectionprofiles;
        //this.connectionprofiles.dedicat
        console.log(this.connectionprofiles);
      });

  }
  addDevices():void{
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.apiurl, JSON.stringify(this.devices), {headers: headers})
      .subscribe(x => {
        this.goBack();
      });

}

  @Input()
  btn_name="Add";
  public input_disabled=false;

}