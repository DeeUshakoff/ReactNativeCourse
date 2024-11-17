import React from 'react';
import {storesContext} from '../RootStore.ts';

export const useRootStore = () => React.useContext(storesContext);
