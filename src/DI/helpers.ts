import {Container} from 'inversify';
import {IAppNetworkService} from '../types/models/services/network';
import {APP_TYPES} from './types';

export const container = new Container();

export function injectAppNetworkService() {
  const networkService: IAppNetworkService = container.get(
    APP_TYPES.AuraAppNetworkService,
  );

  return networkService;
}
