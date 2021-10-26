/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 19:03:31
 * @LastEditTime: 2021-10-26 15:50:14
 * @FilePath: /otter/src/decorators/Guard/index.tsx
 * @Description:
 */

import React, { Component } from 'react'

import { connect } from 'react-redux'

import { STATUS } from '@/constants'
import AppService from '@/stores/app/app.service'

type IProps = {
  permissions: string[]
}

type IState = {
  loading: boolean
  props: any
}

export const GuardDecorator = () => (WrappedComponent) => {
  const mapStateToProps = state => ({
    status: state.app.status
  });
  const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(AppService.getInfo()),
  });
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class Guard extends Component<IProps, IState> {
    componentDidMount() {
      // @ts-ignore
      const { getInfo } = this.props
      getInfo()
    }
    render() {
      // @ts-ignore
      const { status } = this.props
      return <>{status !== STATUS.IDLE ? <>loading</> : <WrappedComponent {...this.props} />}</>
    }
  }
  return Guard
}
