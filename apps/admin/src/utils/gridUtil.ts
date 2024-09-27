export type RowClickEvent = {
  grid: TGrid
  row: TRow
  col: string
}

type GridOnClickCallback = (params: {
  grid: TGrid
  row: TRow
  col: string
}) => boolean | number | null | undefined | void

type grudUtilProps = {
  data: any[]
  colInfo: {
    accessorKey: string
    header: string
    visible: string
    size: string
    type: string
    option?: { name: string; value: string }[]
  }[]
  gridId: string
  cbFunction?: GridOnClickCallback
}

export const gridUtil = ({
  colInfo,
  data,
  gridId,
  cbFunction,
}: grudUtilProps) => {
  const gridColumns = colInfo.map(col => {
    const isEnumType = col.type === 'Enum'

    // EnumType이고 option이 존재하는 경우에만 처리
    const enumKeys =
      isEnumType && col.option
        ? `|${col.option.map(opt => opt.value).join('|')}|`
        : ''

    const enumNames =
      isEnumType && col.option
        ? `|${col.option.map(opt => opt.name).join('|')}|`
        : ''

    return `<C
      Name='${col.accessorKey}'
      Type='${col.type}'
      Visible='${col.visible}'
      MinWidth='80'
      RelWidth='1'
      CanEdit='${col.accessorKey === 'authorityCode' ? '1' : '0'}'
      Width='${col.size}'
      ${isEnumType ? `CanSort='1' Align='left' EnumKeys='${enumKeys}' Enum='${enumNames}' IconAlign='Right' ShowHint='0'` : ''}
    />`
  })

  const bodyDatas = data.map(row => {
    const projectsDisplay =
      row.projects.length > 1
        ? `${row.projects[0].projectName} 외 ${row.projects.length - 1}건`
        : row.projects[0]?.projectName || '' // projects 배열이 비어있을 경우 빈 문자열 처리

    return `
      <I
        userId='${row.userId}'
        userName='${row.userName}'
        companyName='${row.companyCode}'
        projects='${projectsDisplay}'
        authorityCode='${row.authorityCode || ''}'
        resetPassword=''
      />
    `
  })

  const header = ` ${colInfo.map(({ accessorKey, header }) => `${accessorKey}='${header}'`).join(' ')}`

  const tgrid = `
      <Grid>
        <Def>
            <D Name='Group' Expanded='1'/>
            <D Name='R' Calculated='1' CalcOrder=''/>
        </Def>
        <Toolbar Visible='0'/>
	    <Cfg SafeCSS='1' Deleting='0' Selecting='1' Code='GTBEZCPSIIQIKC' Selecting='0' CanHide='2' MaxWidth='1' NoVScroll='1' MaxHeight='400' ConstWidth='0' Dragging='0' StandardTip='0'/>
        <Cols>
            ${gridColumns}
        </Cols>
        <Body>
            <B>
                ${bodyDatas}
            </B>
        </Body>
        <Header id='Header' NoEscape='1' ${header} />
      </Grid>
    `

  const currentGrid = TreeGrid(tgrid, gridId)

  if (cbFunction && Grids) {
    Grids.OnClick = (grid, row, col, x, y, event) => {
      return cbFunction({ grid, row: row, col })
    }
  }

  return currentGrid
}
