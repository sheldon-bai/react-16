import React from 'react'
import './Pager.css'
/**
 * 分页组件
 * props:
 * 1. current： 初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示数据量
 * 4. 数字页码最多显示多少个
 * 
 */

function getPageNumber(props) {
  return Math.ceil(props.total / props.limit)
}

export default function Pager(props) {
  const pageNumber = getPageNumber(props)
  const min = getMinNumber(props)
  const max = getMaxNumber(min, pageNumber, props)
  const numbers = []

  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        className={i === props.current ? 'item active' : 'item'}
        key={i}
        onClick={() => toPage(i, props, pageNumber)}
      >{i}</span>)
  }

  return (
    <>
      <span
        onClick={() => toPage(1, props, pageNumber)}
        className={
        props.current === 1 ? 'item disabled' : 'item'
      }>首页</span>
      <span
        onClick={() => toPage(props.current - 1, props, pageNumber)}
        className={
        props.current === 1 ? 'item disabled' : 'item'
      }>上一页</span>
      {/* 数字页码 */}
      {numbers}
      <span
        onClick={() => toPage(props.current + 1, props, pageNumber)}
        className={props.current === pageNumber ? 'item disabled' : 'item'}
      >下一页</span>
      <span
        onClick={() => toPage(pageNumber, props, pageNumber)}
        className={props.current === pageNumber ? 'item disabled' : 'item'}
      >尾页</span>
      <span className='current'>{props.current}</span>
      /
      <span>{pageNumber}</span>
    </>
  )
}

/**
 * 
 * @param {*} props 
 * @param {*} pageNumber 
 * @returns 
 */
function getMinNumber(props, pageNumber) {
  let min = props.current - Math.floor(props.panelNumber / 2)

  if (min < 1) {
    min = 1
  }

  return min
}

function getMaxNumber(min, pageNumber, props) {
  let max = min + props.panelNumber - 1

  if (max > pageNumber) {
    max = pageNumber
  }

  return max
}

/**
 * 
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, props, pageNumber) {
  if (props.current === target || target < 1 || target > pageNumber) {
    return
  }

  props.onPageChange && props.onPageChange(target)
}