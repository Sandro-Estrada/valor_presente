import React from 'react'
import AntdIcon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
interface Props extends Partial<CustomIconComponentProps> {
    src: any;
}

function Icon(props: Props) {
  return (
    <AntdIcon component={props.src} {...props} />
  )
}

export default Icon