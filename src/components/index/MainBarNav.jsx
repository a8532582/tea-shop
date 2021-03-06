import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import logo from 'images/logo.svg'
import logoH from 'images/logo-h.svg'

export default function MainBarNav({ isOpen, onClick }) {
  return (
    <>
      <div className="main-bar-nav">
        <Navbar
          className="d-flex flex-lg-column flex-grow-1 align-items-start align-items-lg-center p-0 pt-3"
          expand="lg"
        >
          <button
            className={`main-bar-brand mb-0 border-0 bg-white outline-0 ${
              isOpen ? 'pt-lg-4' : ''
            }`}
            onClick={onClick}
          >
            <img
              src={logo}
              alt="湘茗"
              width="30px"
              className={`d-none ${isOpen ? 'd-lg-none' : 'd-lg-inline'}`}
            />
            <i
              className={`fas fa-bars fa-lg d-none ${
                !isOpen ? 'd-lg-none' : 'd-lg-inline'
              }`}
            />
            <img
              src={logoH}
              alt="湘茗"
              height="30px"
              className="d-lg-none ml-3"
            />
          </button>

          <Router>
            <Navbar.Toggle className="ml-auto pt-0 border-0 outline-0" />
            <Navbar.Collapse>
              <Nav className="h-100 flex-lg-column text-center">
                <Nav.Item className="d-lg-none border-bottom">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="Commodity" className="d-block">
                      尋茶
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none border-bottom">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="/cart" className="d-block">
                      文化走訪
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none border-bottom">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="/cart" className="d-block">
                      茗家精選
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="border-bottom border-bottom-lg-0">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="/cart" className="d-block">
                      <i className="fas fa-shopping-cart" />
                      <span className="d-lg-none ml-2">會員中心</span>
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="border-bottom border-bottom-lg-0">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="/cart" className="d-block">
                      <i className="fas fa-user" />
                      <span className="d-lg-none ml-2">購物車</span>
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-grow-1" />
                <Nav.Item className="mb-lg-2 border-bottom border-bottom-lg-0">
                  <Nav.Link as="p" className="mb-0">
                    <Link to="/cart" className="d-block">
                      <i className="fas fa-phone" />
                      <span className="d-lg-none ml-2">聯絡我們</span>
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Router>
        </Navbar>
      </div>
    </>
  )
}
