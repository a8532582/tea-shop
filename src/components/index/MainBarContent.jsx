import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import DelayFInR from 'utils/DelayFInR'
import logoH from 'images/logo-h.svg'

const fadeInAnimate = keyframes`${fadeIn}`

const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimate};
`

const listNames = [
  { name: '尋茶', path: '/Commodity' },
  { name: '文化走訪', path: '/events' },
  { name: '茗家精選', path: '/' },
  { name: '茶風味輪', path: '/' },
  { name: '台灣茶分布圖', path: '/' },
]

export default function MainBarContent({ onClick }) {
  return (
    <>
      <div className="main-bar-content d-none d-lg-flex flex-column justify-content-between">
        <FadeInDiv>
          <h1>
            <Link to="/" onClick={onClick}>
              <img src={logoH} alt="湘茗" height="30px" className="ml-4 mt-2" />
            </Link>
          </h1>
        </FadeInDiv>
        <nav className="mx-auto mb-7">
          <div className="sy_list sy_list-vertical mx-auto fs-lg">
            {listNames.map((item, i) => {
              return (
                <li
                  key={i}
                  className={i === 0 ? 'list-item' : 'list-item mr-6'}
                >
                  <DelayFInR delay={`.${i}`}>
                    <Link
                      to={item.path}
                      onClick={onClick}
                      className="list-link border-always border-top border-secondary"
                    >
                      {item.name}
                    </Link>
                  </DelayFInR>
                </li>
              )
            })}
          </div>
        </nav>
        <div className="d-flex justify-content-center pb-4">
          <FadeInDiv className="ml-auto fs-xs">
            Copyright © 2020 湘茗 Inc. All rights reserved
          </FadeInDiv>
          <div className="ml-auto">
            <DelayFInR>0977-737-579</DelayFInR>
          </div>
        </div>
      </div>
    </>
  )
}
