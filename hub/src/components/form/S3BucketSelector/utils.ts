import { S3ResourceSelectorProps } from '@cloudscape-design/components/s3-resource-selector';

export const getResourceSelectorI18n = (
    params?: Partial<S3ResourceSelectorProps['i18nStrings']>,
): S3ResourceSelectorProps['i18nStrings'] => ({
    inContextInputPlaceholder: 'bucket',
    inContextSelectPlaceholder: '',
    inContextBrowseButton: 'Browse S3',
    inContextViewButton: 'View',
    inContextViewButtonAriaLabel: 'View (opens in a new tab)',
    inContextLoadingText: '',
    inContextUriLabel: '',
    inContextVersionSelectLabel: '',
    modalTitle: 'Choose an archive in S3',
    modalCancelButton: 'Cancel',
    modalSubmitButton: 'Choose',
    modalBreadcrumbRootItem: 'S3 buckets',
    selectionBuckets: 'Buckets',
    selectionObjects: '',
    selectionVersions: '',
    selectionBucketsSearchPlaceholder: 'Find bucket',
    selectionObjectsSearchPlaceholder: 'Find object by prefix',
    selectionVersionsSearchPlaceholder: 'Find version',
    selectionBucketsLoading: 'Loading buckets',
    selectionBucketsNoItems: 'No buckets',
    selectionObjectsLoading: '',
    selectionObjectsNoItems: '',
    selectionVersionsLoading: '',
    selectionVersionsNoItems: '',
    filteringCounterText: (count: number) => '' + count + (count === 1 ? ' match' : ' matches'),
    filteringNoMatches: 'No matches',
    filteringCantFindMatch: "We can't find a match.",
    clearFilterButtonText: 'Clear filter',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    columnBucketID: 'ID',
    columnBucketName: 'Name',
    columnBucketCreationDate: 'Creation date',
    columnBucketRegion: 'Region',
    columnBucketAccess: 'Access',
    // columnObjectID: 'ID',
    // columnObjectKey: 'Key',
    // columnObjectLastModified: 'Last modified',
    // columnObjectSize: 'Size',
    // columnVersionID: 'Version ID',
    // columnVersionLastModified: 'Last modified',
    // columnVersionSize: 'Size',
    validationPathMustBegin: 'The path must begin with s3://',
    validationBucketLowerCase: 'The bucket name must start with a lowercase character or number.',
    validationBucketMustNotContain: 'The bucket name must not contain uppercase characters.',
    validationBucketMustComplyDns: 'The bucket name must comply with DNS naming conventions',
    validationBucketLength: 'The bucket name must be from 3 to 63 characters.',
    labelSortedDescending: (columnName: string) => columnName + ', sorted descending',
    labelSortedAscending: (columnName: string) => columnName + ', sorted ascending',
    labelNotSorted: (columnName: string) => columnName + ', not sorted',
    labelsPagination: {
        nextPageLabel: 'Next page',
        previousPageLabel: 'Previous page',
        pageLabel: (pageNumber: number) => 'Page ' + pageNumber + ' of all pages',
    },
    labelsBucketsSelection: {
        itemSelectionLabel: (_, item) => item?.Name ?? '',
        selectionGroupLabel: 'Buckets',
    },
    labelsObjectsSelection: {
        itemSelectionLabel: () => '',
        selectionGroupLabel: 'Objects',
    },
    labelsVersionsSelection: {
        itemSelectionLabel: () => '',
        selectionGroupLabel: 'Versions',
    },
    labelFiltering: (itemsType: string) => 'Find ' + itemsType,
    labelRefresh: 'Refresh the data',
    labelAlertDismiss: 'Dismiss the alert',
    labelModalDismiss: 'Dismiss the modal',
    labelBreadcrumbs: 'S3 navigation',

    ...params,
});
