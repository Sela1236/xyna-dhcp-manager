/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2022 GIP SmartMercial GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
import { XoArray, XoArrayClass, XoObject, XoObjectClass, XoProperty } from '@zeta/api';


@XoObjectClass(null, 'xmcp.dhcp.v4.dhcpoptions', 'SyncCpeIPsOutput')
export class XoSyncCPEIPOutput extends XoObject {


    @XoProperty()
    syncCpeIPsOutput: string;
}

@XoArrayClass(XoSyncCPEIPOutput)
export class XoSyncCPEIPOutputArray extends XoArray<XoSyncCPEIPOutput> {
}
