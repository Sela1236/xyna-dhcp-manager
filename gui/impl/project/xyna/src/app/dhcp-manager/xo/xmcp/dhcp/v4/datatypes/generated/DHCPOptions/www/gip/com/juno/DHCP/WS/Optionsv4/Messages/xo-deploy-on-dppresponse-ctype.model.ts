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
import { XoObjectClass, XoArrayClass, XoProperty, XoArray } from '@zeta/api';
import { XoXSDBaseModel } from '../../../../../../../../../../../../../../xdnc/model/xsd/xo-xsdbase-model.model';
import { XoStatusReportctypeArray } from './xo-status-report-ctype.model';


@XoObjectClass(XoXSDBaseModel, 'xmcp.dhcp.v4.datatypes.generated.DHCPOptions.www.gip.com.juno.DHCP.WS.Optionsv4.Messages', 'DeployOnDPPResponse_ctype')
export class XoDeployOnDPPResponsectype extends XoXSDBaseModel {


    @XoProperty(XoStatusReportctypeArray)
    statusReport: XoStatusReportctypeArray = new XoStatusReportctypeArray();


}

@XoArrayClass(XoDeployOnDPPResponsectype)
export class XoDeployOnDPPResponsectypeArray extends XoArray<XoDeployOnDPPResponsectype> {
}
