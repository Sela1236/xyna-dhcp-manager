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
import { XoXSDBaseModel } from '../../../../../../../../../../../../../xdnc/model/xsd/xo-xsdbase-model.model';


@XoObjectClass(XoXSDBaseModel, 'xmcp.dhcp.v4.datatypes.generated.Dhcpv4Packets.www.gip.com.juno.Gui.WS.Messages', 'ColValuesDistinct_ctype')
export class XoColValuesDistinctctype extends XoXSDBaseModel {


    @XoProperty()
    value: string[];


}

@XoArrayClass(XoColValuesDistinctctype)
export class XoColValuesDistinctctypeArray extends XoArray<XoColValuesDistinctctype> {
}
