/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {TableDemo} from './table-demo';
import {MaterialExampleModule} from '../example/example-module';

@NgModule({
  imports: [MaterialExampleModule],
  declarations: [TableDemo],
})
export class TableDemoModule { }
