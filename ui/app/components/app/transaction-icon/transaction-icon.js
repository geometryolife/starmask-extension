import React from 'react';
import PropTypes from 'prop-types';
import Approve from '../../ui/icon/approve-icon.component';
import Interaction from '../../ui/icon/interaction-icon.component';
import Receive from '../../ui/icon/receive-icon.component';
import Send from '../../ui/icon/send-icon.component';
import Sign from '../../ui/icon/sign-icon.component';
import Swap from '../../ui/icon/swap-icon-for-list.component';
import {
  TRANSACTION_GROUP_CATEGORIES,
  TRANSACTION_GROUP_STATUSES,
  TRANSACTION_STATUSES,
} from '../../../../../shared/constants/transaction';

const ICON_MAP = {
  [TRANSACTION_GROUP_CATEGORIES.APPROVAL]: Approve,
  [TRANSACTION_GROUP_CATEGORIES.INTERACTION]: Interaction,
  [TRANSACTION_GROUP_CATEGORIES.SEND]: Send,
  [TRANSACTION_GROUP_CATEGORIES.SIGNATURE_REQUEST]: Sign,
  [TRANSACTION_GROUP_CATEGORIES.RECEIVE]: Receive,
  [TRANSACTION_GROUP_CATEGORIES.SWAP]: Swap,
  [TRANSACTION_GROUP_CATEGORIES.MULTI_SIGN_CREATE]: Sign,
  [TRANSACTION_GROUP_CATEGORIES.MULTI_SIGN_ADD_SIGN]: Approve,
};

const FAIL_COLOR = '#D73A49';
const PENDING_COLOR = '#6A737D';
const OK_COLOR = '#2F80ED';

const COLOR_MAP = {
  [TRANSACTION_GROUP_STATUSES.PENDING]: PENDING_COLOR,
  [TRANSACTION_STATUSES.UNAPPROVED]: PENDING_COLOR,
  [TRANSACTION_STATUSES.APPROVED]: PENDING_COLOR,
  [TRANSACTION_STATUSES.FAILED]: FAIL_COLOR,
  [TRANSACTION_STATUSES.REJECTED]: FAIL_COLOR,
  [TRANSACTION_GROUP_STATUSES.CANCELLED]: FAIL_COLOR,
  [TRANSACTION_STATUSES.DROPPED]: FAIL_COLOR,
  [TRANSACTION_STATUSES.MULTISIGN]: OK_COLOR,
};

export default function TransactionIcon({ status, category }) {
  const color = COLOR_MAP[status] || OK_COLOR;

  const Icon = ICON_MAP[category];

  return <Icon color={color} size={28} />;
}

TransactionIcon.propTypes = {
  status: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
