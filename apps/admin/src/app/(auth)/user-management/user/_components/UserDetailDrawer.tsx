'use client'

import { type UserDetailResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserDetailResDto'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@pims-frontend/ui/components/base/shadcn/sheet'
import {
  RadixTabs,
  RadixTabsList,
  RadixTabsTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tabs'
import React, { useRef } from 'react'
import { userMgtActions, userMgtSelectors } from '../_query/userMgtSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/admin/lib/hooks'
import { useGetUserInfoQuery } from '@pims-frontend/apis/lib/features/common/user/controller/UserController'
// import BaseInfoTab from './BaseInfoTab'

const UserDetailDrawer = () => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLFormElement>(null)

  const { userMgtDrawer } = useAppSelector(userMgtSelectors.selectState)

  const { data } = useGetUserInfoQuery({
    userId: userMgtDrawer.seluserId ?? '',
  })

  return (
    <Sheet
      open={userMgtDrawer.isuserMgtDrawerOpen}
      onOpenChange={() => {
        dispatch(userMgtActions.closeUserMgtDrawer())
      }}
    >
      <RadixTabs defaultValue="base-info">
        <SheetContent className="p-0 flex flex-col min-w-[640px] h-screen gap-0">
          <SheetHeader className="flex-none w-full bg-background-plain">
            <SheetTitle className="p-6">사용자 정보</SheetTitle>
            <RadixTabsList className="flex justify-start gap-2 px-6 bg-transparent">
              <RadixTabsTrigger value="base-info" variant={'bottomActive'}>
                기본 정보
              </RadixTabsTrigger>
              <RadixTabsTrigger
                value="connect-history"
                variant={'bottomActive'}
              >
                접속 이력
              </RadixTabsTrigger>
            </RadixTabsList>
          </SheetHeader>
          <div className="flex-grow py-10 overflow-y-auto bg-background-plain">
            {/* {data && <BaseInfoTab ref={ref} data={data} />} */}
          </div>
          <SheetFooter className="p-3 flex-none bg-background-plain border-t border-t-border-normal">
            <Button
              className="bg-primary-normal"
              onClick={() => {
                ref.current?.requestSubmit()
                dispatch(userMgtActions.closeUserMgtDrawer())
              }}
            >
              확인
            </Button>
          </SheetFooter>
        </SheetContent>
      </RadixTabs>
    </Sheet>
  )
}

export default UserDetailDrawer
