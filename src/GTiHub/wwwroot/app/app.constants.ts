import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    Server = "http://localhost:5000/";
    ApiUrl = "api/";
    ServerWithApiUrl = this.Server + this.ApiUrl;
}