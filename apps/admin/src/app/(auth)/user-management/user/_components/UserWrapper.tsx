'use client'

import { useAppDispatch } from '@pims-frontend/admin/lib/hooks'
import {
  gridUtil,
  type RowClickEvent,
} from '@pims-frontend/admin/utils/gridUtil'
import { useGetAllUsersQuery } from '@pims-frontend/apis/lib/features/common/user/controller/UserController'
import CommonTable from '@pims-frontend/ui/components/base/shadcn/CommonTable'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import { useEffect } from 'react'
import { userMgtActions } from '../_query/userMgtSlice'
import UserDetailDrawer from './UserDetailDrawer'
const UserWrapper = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()

  const { data } = useGetAllUsersQuery({
    limit: -1,
    page: -1,
  })

  const colInfo = [
    {
      accessorKey: 'userId',
      header: '사번',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'userName',
      header: '사용자명',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'companyName',
      header: '소속',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'projects',
      header: '프로젝트 투입 정보',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'authorityCode',
      header: '시스템 권한',
      visible: '1',
      size: '140',
      type: 'Enum',
      option: [
        { name: '시스템관리자', value: '011' },
        { name: '현장관리자', value: '012' },
        { name: '재직 중', value: '013' },
      ],
    },
    {
      accessorKey: 'resetPassword',
      header: '사용자 기능',
      visible: '1',
      size: '140',
      type: 'Button',
    },
  ]

  useEffect(() => {
    if (data) {
      gridUtil({
        colInfo: colInfo,
        data: data,
        gridId: 'userGrid',
        cbFunction: rowClick,
      })
    }
  }, [data])

  //fixME any..
  const rowClick = (info: RowClickEvent & any) => {
    const userId = info.row.userId
    dispatch(userMgtActions.openUserMgtDrawer(info.row.userId))
  }

  return (
    <>
      <CommonTable uuid="userGrid" />

      <UserDetailDrawer />
    </>
  )
}

export default UserWrapper
