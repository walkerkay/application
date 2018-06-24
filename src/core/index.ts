import * as helpers from './util/helpers';
import { HeadService } from './service/head.service';
import { UtilService } from './util/util.service';
import * as constant from './constant';

export {
    constant,
    helpers,
    HeadService,
    UtilService
};

export const CORE_SERVICES = [
    HeadService,
    UtilService
];
