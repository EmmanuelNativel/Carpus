/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
  lundi: {
    id: `${scope}.tryme.lundi`,
    defaultMessage: 'lundi',
  },
  mardi: {
    id: `${scope}.tryme.mardi`,
    defaultMessage: 'mardi',
  },
  mercredi: {
    id: `${scope}.tryme.mercredi`,
    defaultMessage: 'mercredi',
  },
  jeudi: {
    id: `${scope}.tryme.jeudi`,
    defaultMessage: 'jeudi',
  },
  vendredi: {
    id: `${scope}.tryme.vendredi`,
    defaultMessage: 'vendredi',
  },
  samedi: {
    id: `${scope}.tryme.samedi`,
    defaultMessage: 'samedi',
  },
  dimanche: {
    id: `${scope}.tryme.dimanche`,
    defaultMessage: 'dimanche',
  },
});
