import React from 'react';
import {storesContext} from '@homeworks/homework-9/RootStore.ts';

export const useRootStore = () => React.useContext(storesContext);
