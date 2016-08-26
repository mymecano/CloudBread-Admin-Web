import {
  sortable,
  readonly,
  boolean,
  datetime,
  Resource,
} from '../types';

const Notices = new Resource({
  resourceId: 'Notices',
  title: 'Notices',
  description: 'Collection of Notices data',
  showFields: [
	'NoticeID',
	'NoticeCategory1',
	'TargetGroup',
	'TargetOS',
	'title',
	'NoticeDurationFrom',
	'NoticeDurationTo',
	'OrderNumber',
	// 'HideYN',
	// 'DeleteYN',
	'CreatedAt',
	// 'UpdatedAt',
  ],
  primaryKey: 'NoticeID',
  searchFields: [
	'NoticeID',
	'NoticeCategory1',
	'TargetGroup',
	'title',
  ],
  fieldGroup: [

  ],
  schema: {
	NoticeID: {},
	NoticeCategory1: {},
	NoticeCategory2: {},
	NoticeCategory3: {},
	TargetGroup: {},
	TargetOS: {},
	TargetDevice: {},
	NoticeImageLink: {},
	title: {},
	content: {},
	sCol1: {},
	sCol2: {},
	sCol3: {},
	sCol4: {},
	sCol5: {},
	sCol6: {},
	sCol7: {},
	sCol8: {},
	sCol9: {},
	sCol10: {},
	NoticeDurationFrom: {},
	NoticeDurationTo: {},
	OrderNumber: {},
	CreateAdminID: {
		readonly,
	},
	HideYN: {
		boolean,
	},
	DeleteYN: {
		boolean,
	},
	CreatedAt: {
		readonly,
		sortable,
		datetime,
	},
	UpdatedAt: {
		readonly,
	},
	DataFromRegion: {
		readonly,
	},
	DataFromRegionDT: {
		readonly,
	},
  },
});

export default Notices;
