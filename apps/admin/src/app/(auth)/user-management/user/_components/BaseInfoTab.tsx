// 'use client'

// import { useAppSelector } from '@pims-frontend/admin/lib/hooks'
// import { type UserProjectResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserProjectResDto'
// import {
//   MaterialReactTable,
//   type MRT_ColumnDef,
//   useMaterialReactTable,
// } from '@pims-frontend/ui/components/base/shadcn/material-react-table'
// import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
// import { SheetDescription } from '@pims-frontend/ui/components/base/shadcn/sheet'
// import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
// import { forwardRef, useEffect, useMemo } from 'react'
// import { userMgtSelectors } from '../_query/userMgtSlice'
// import { useGetUserInfoQuery } from '../../../../../../../../shared/apis/src/lib/features/common/user/controller/UserController'
// import { type UserDetailResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserDetailResDto'
// import { UserBaseInfoForm } from './UserBaseInfoForm'

// export type BaseInfoTabProps = {
//   data: UserDetailResDto
//   //   #TODO
// }

// export const BaseInfoTab = forwardRef<HTMLFormElement, BaseInfoTabProps>(
//   function BaseInfoTab({ data }, ref) {

//     return (
//       <TabsContent value="base-info">
//         <SheetDescription className="px-9">기본정보</SheetDescription>
//         <UserBaseInfoForm defaultValues={data} ref={ref} />
//         <div className="flex flex-col px-9 gap-4">
//           <SheetDescription className="text-xs">투입정보</SheetDescription>
//           <SheetDescription className="text-2xs px-3">
//             프로젝트{' '}
//             <span className="text-primary-normal">{data.projects.length}</span>
//           </SheetDescription>
//           {/* <MaterialReactTable table={table} /> */}
//         </div>
//       </TabsContent>
//     )
//   },
// )

// BaseInfoTab.displayName = 'BaseInfoTab'
