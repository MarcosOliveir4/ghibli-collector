import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GhibliApiService } from './ghibli-api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [GhibliApiService]
})
export class GhibliApiModule {}
