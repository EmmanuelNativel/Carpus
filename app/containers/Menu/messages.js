/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  addDrive: {
    id: `${scope}.addDrive`,
    defaultMessage: 'Ajouter un trajet',
  },
  getDrive: {
    id: `${scope}.getDrive`,
    defaultMessage: 'Trouver un trajet',
  },
});
