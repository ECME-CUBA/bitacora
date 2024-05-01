import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20868,
  login: 'u~RAS@r2U\\Ab5U\\SR\\bABBD8c',
};

export const sampleWithPartialData: IUser = {
  id: 5678,
  login: '1hqtMQ',
};

export const sampleWithFullData: IUser = {
  id: 14437,
  login: 'h99S2',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
