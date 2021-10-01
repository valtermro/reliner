import { AppInstallerContext } from '../master/services';
import ProtocolarPetIntReq from './ProtocolarPetIntReq';

export async function install(ctx: AppInstallerContext) {
  ctx.addApp({
    id: 'pet-int-req-protocolar',
    name: 'Protocolar pet. int. req.',
    description: 'Protocolar petição intermediária requisitório',
    component: ProtocolarPetIntReq
  });
  
  ctx.addApp({
    id: 'pet-int-req-protocolar_2',
    name: 'Protocolar pet. int. req. 2',
    description: 'Protocolar petição intermediária requisitório 2',
    component: ProtocolarPetIntReq
  });
}