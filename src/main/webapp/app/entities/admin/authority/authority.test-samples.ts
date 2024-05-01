import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'fd2387b0-edaa-4c9b-998f-39155734b72f',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c493f43c-7535-43d3-9004-bfec690bad47',
};

export const sampleWithFullData: IAuthority = {
  name: '48424e1f-ee89-4ee5-8bbc-f6a7c263e3cd',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
