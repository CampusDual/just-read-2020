import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
} from "ontimize-web-ngx";

import { CONFIG } from "./app.config";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      countDuplicates: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: "increasing",
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders,
  ],
})
export class AppModule {}
